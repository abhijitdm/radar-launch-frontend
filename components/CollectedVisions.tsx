import { ProjectWithOwnedAmount } from "@/pages/admin";
import { CollectedVision } from "./CollectedVision";

export function CollectedVisions({
  projects,
}: {
  projects: ProjectWithOwnedAmount[];
}) {
  return (
    <div className="p-8 rounded-lg border mb-6">
      <h2 className="text-xl">Collected Visions</h2>
      <div className="grid grid-cols-4 gap-2">
        {projects.map((edition) => (
          <CollectedVision {...edition} key={edition._id} />
        ))}
      </div>
    </div>
  );
}
