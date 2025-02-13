import { AdminNav } from "@/components/AdminNav";
import { AuthContext } from "@/components/AuthProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { Project, ProjectUpdate } from "@/types/mongo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "wagmi";
import * as z from "zod";

async function getUpdates(
  idToken: string,
  projectId?: string
): Promise<ProjectUpdate[]> {
  if (!projectId) {
    return [];
  }
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/projects/${projectId}/updates`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      }
    ).then((res) => res.json());
    return res;
  } catch (e) {
    console.error(e);
  }
  return [];
}

async function sendUpdate(
  idToken: string,
  values: ProjectUpdate
): Promise<ProjectUpdate | undefined> {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/projects/${values.project}/updates`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(values),
      }
    );
    return await res.json();
  } catch (e) {
    console.error(e);
  }
  return;
}

async function getProjects(idToken: string, id?: string): Promise<Project[]> {
  if (!id) {
    return [];
  }
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/users/${id}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    }).then((res) => res.json());
    return res;
  } catch (e) {
    console.error(e);
  }
  return [];
}

const formSchema = z.object({
  project: z.string().min(1, { message: "Project is required" }),
  text: z.string(),
});

export default function Updates() {
  const { data } = useGetCurrentUser();
  const { idToken } = useContext(AuthContext);

  const { data: projects } = useQuery(
    ["projects", data?._id],
    () => getProjects(idToken, data?._id),
    {
      enabled: Boolean(data?._id) && Boolean(idToken),
    }
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      project: "",
      text: "",
    },
  });
  const { control, handleSubmit, watch } = form;

  const projectId = watch("project");
  const project = projects?.find((project) => project._id === projectId);

  const { data: updates, refetch } = useQuery(
    ["updates", data?._id],
    () => getUpdates(idToken, project?._id),
    {
      enabled: Boolean(project?._id) && Boolean(idToken),
    }
  );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await sendUpdate(idToken, values);
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-24 max-w-screen-lg mx-auto">
      <AdminNav />
      <div className="flex mb-20">
        <div className="w-1/2 pr-10">
          <h1 className="text-lg">Share an update with your supporters</h1>
          <p>
            Update your supporters with the latest intel on your project and
            progress. Let them know what you&apos;re looking for and how they
            can support you. Help them help you spread your vision!
          </p>
          {projects !== undefined ? (
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                  control={control}
                  name="project"
                  render={({ field }) => (
                    <FormItem className="pb-4">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full mt-6">
                          <FormControl>
                            <SelectValue placeholder="Select a vision to update" />
                          </FormControl>
                        </SelectTrigger>
                        <SelectContent>
                          {projects?.map((project, index) => (
                            <SelectItem key={index} value={project._id}>
                              {project.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea className="mb-4" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Share Update</Button>
              </form>
            </Form>
          ) : (
            <div>No projects found</div>
          )}
        </div>
        {project && (
          <div className="flex-grow">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Previous Updates</AccordionTrigger>
                <AccordionContent>
                  {!updates && <p>There are no updates for this project.</p>}
                  {updates &&
                    updates.map((update, index) => (
                      <p key={index}>{update.text}</p>
                    ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Previous Milestones</AccordionTrigger>
                <AccordionContent>
                  {!project.milestones && (
                    <p>There are no milestones for this project.</p>
                  )}
                  {project.milestones &&
                    project.milestones.map((milestone, index) => (
                      <p key={index}>
                        {milestone.text}: {milestone.amount}
                      </p>
                    ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
}
