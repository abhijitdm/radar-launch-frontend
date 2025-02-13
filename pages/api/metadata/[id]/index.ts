import abi from "@/abi/RadarEditions.sol/RadarEditions.json";
import {
  GOERLI_CONTRACT_ADDRESS,
  MAINNET_CONTRACT_ADDRESS,
} from "@/constants/address";
import { getProject } from "@/lib/backend";
import { generateVideoThumbnail } from "@/lib/generateVideoThumbnail";
import isTestnet from "@/lib/isTestnet";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import { optimism, optimismGoerli } from "wagmi/chains";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Record<string, any>>
) {
  if (req.method !== "GET") {
    return res.status(404).json({});
  }
  try {
    const { id: tokenId } = req.query;
    if (tokenId === undefined) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const provider = ethers.getDefaultProvider(
      isTestnet() ? optimismGoerli.id : optimism.id
    );
    const contract = new ethers.Contract(
      isTestnet() ? GOERLI_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS,
      abi.abi,
      provider
    );
    const [, , , , id] = (await contract.editions(tokenId)) ?? [];

    const project = await getProject(id);
    if (project === undefined) {
      return res.status(404).json({ message: "Project not found" });
    }
    return res.status(200).json({
      name: project.title,
      image: generateVideoThumbnail(project.video_url),
      description: project.description,
      external_url: `https://radarlaunch.app/projects/${id}`,
      attributes: project.tags.map((tag) => ({
        trait_type: "Future of:",
        value: tag,
      })),
    });
  } catch (e) {
    console.error(e);
  }

  return res.status(400).json({});
}
