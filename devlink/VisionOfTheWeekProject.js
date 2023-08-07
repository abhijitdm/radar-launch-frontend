import React from "react";
import * as _Builtin from "./_Builtin";
import { getCountdown } from "@/lib/utils";
import HoverVideoPlayer from "react-hover-video-player";
import { useGetProject } from "@/hooks/useGetProject";
import { generateHoverVideoLink } from "@/lib/generateHoverVideoLink";
import { DotIcon } from "lucide-react";
import { ProjectStatus } from "@/types/mongo";
import {
  useRadarEditionsGetEditions,
  useRadarEditionsTotalSupply,
} from "@/lib/generated";
import isTestnet from "@/lib/isTestnet";
import {
  GOERLI_CONTRACT_ADDRESS,
  MAINNET_CONTRACT_ADDRESS,
} from "@/constants/address";
import { chains } from "../components/Web3Provider";

export function VisionOfTheWeekProject({ projectId }) {
  const { data: onChainProjects } = useRadarEditionsGetEditions({
    address: isTestnet() ? GOERLI_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS,
    chainId: chains[0]?.id,
    enabled: Boolean(chains[0]?.id),
  });

  const editionId = onChainProjects?.findIndex(
    (project) => project.id === projectId
  );
  const { data: totalSupply } = useRadarEditionsTotalSupply({
    address: isTestnet() ? GOERLI_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS,
    chainId: chains[0]?.id,
    args: [BigInt(Math.max(editionId || 0, 0))],
    enabled: Boolean(chains[0]?.id) && editionId !== undefined,
  });
  const { data } = useGetProject(projectId);
  return (
    <_Builtin.Block className="featured-project-wrapper" tag="div">
      <_Builtin.Paragraph className="mobile-subtitle">
        {"Featured Project"}
      </_Builtin.Paragraph>
      <_Builtin.Block
        className="floating-weekly-featured full !bg-gray-600/30"
        tag="div"
      >
        {"✨ DROP OF THE WEEK ✨"}
      </_Builtin.Block>
      <_Builtin.Block className="project-image" tag="div">
        <HoverVideoPlayer
          focused
          loop
          videoSrc={
            data?.video_url
              ? generateHoverVideoLink(data.video_url)
              : "/RL1.mp4"
          }
          className="!hidden md:!inline-block"
        />
      </_Builtin.Block>
      <_Builtin.Block className="feature-project-div" tag="div">
        <_Builtin.Block className="_20px-div" tag="div" />
        <_Builtin.Link
          className="link-block-3"
          button={false}
          options={{
            href: "/project/" + projectId,
          }}
        >
          <_Builtin.Block className="div-block-97" tag="div">
            <_Builtin.Paragraph className="featured-project-title font-bolded text-2xl leading-7">
              {data?.title || "FUTURES DROP #1"}
            </_Builtin.Paragraph>
            <_Builtin.Block className="arrow-diagonal" tag="div">
              {"↗"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Link>
        {/* <_Builtin.Block className="featured-project-bio" tag="div">
          <_Builtin.Paragraph className="project-byline">
            {"byline"}
          </_Builtin.Paragraph>
        </_Builtin.Block> */}
        {data?.description && (
          <p className="text-xs text-gray-700">{data.description}</p>
        )}
        <_Builtin.Block className="_10px-div" tag="div" />
        <_Builtin.Block
          className="collect-wrapper main flex justify-center bottom-1 md:bottom-[5%] pt-3"
          tag="div"
        >
          <_Builtin.Block className="text-xs text-gray-400" tag="div">
            {data?.status === ProjectStatus.LIVE ? (
              <p className="text-center text-gray-700">
                {data?.mint_end_date ? (
                  <>
                    <span>{getCountdown(new Date(data.mint_end_date))}</span>
                    <DotIcon className="inline" />
                  </>
                ) : null}
                {totalSupply !== undefined && (
                  <span>{totalSupply.toString()} collected</span>
                )}
              </p>
            ) : (
              <div>
                {getCountdown(new Date("2023-08-03T23:00:00+02:00"))} until drop
              </div>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Builtin.Block>
  );
}
