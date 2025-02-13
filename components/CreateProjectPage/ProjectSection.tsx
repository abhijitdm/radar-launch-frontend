import { generateVideoThumbnail } from "@/lib/generateVideoThumbnail";
import { Brief } from "@/types/mongo";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { createFormSchema } from "@/pages/project/create";
import * as z from "zod";

export function ProjectSection() {
  const { control, watch } = useFormContext<z.infer<typeof createFormSchema>>();

  const video_image = watch("video_image");

  return (
    <div className="border border-slate-200 rounded p-10 mb-10">
      <h1 className="font-base">The Project</h1>
      <p className="form-subheading">
        {"Hey there future maker, what's your project?"}
      </p>
      <hr className="border-b-1 border-slate-200 my-8" />
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 pr-4">
          <h2 className="text-xl font-base">Basic Info</h2>
          <p>
            Write a Clear and Concise Title and Subtitle for Your Project
            <br />
            <br />
            Your project title and subtitle will appear on your project and
            pre-launch pages, as well as in category pages, search results, and
            emails we send to our community. Make sure they accurately represent
            your project and are easy to understand for potential supporters.
          </p>
        </div>
        <div className="col-span-1">
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>What is the name of your project?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Describe your idea in a sentence</FormLabel>
                <FormDescription className="text-xs">
                  This will be featured on homepage alongside your video
                </FormDescription>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <hr className="border-b-1 border-slate-200 my-8" />
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 pr-4">
          <h2 className="text-xl font-base">Summary</h2>
          <p>
            Please provide a brief summary that will motivate supporters to
            believe in your vision. Be genuine rather than polished!
            <br />
            <br />
            Explain what you aim to achieve with the funding, how you intend to
            accomplish it, who you are, and why this project is important to
            you. Demonstrations and step-by-step guides are highly effective!
          </p>
        </div>
        <div className="col-span-1">
          <FormField
            control={control}
            name="video_url"
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Share a brief 3-minute video through a URL (e.g. Vimeo or
                  YouTube) introducing your vision for a better future.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="tldr"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project TLDR</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <hr className="border-b-1 border-slate-200 my-8" />
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 pr-4">
          <h2 className="text-xl font-base">Video Image</h2>
          <p>
            This image is taken from the thumbnail of your uploaded video.
            <br />
            <br />
            This will appear for collectors in their wallet and on their
            profile.
          </p>
        </div>
        <div className="col-span-1 space-y-2">
          <FormField
            control={control}
            name="video_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter a YouTube or Vimeo URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {video_image !== "" && (
            <img src={generateVideoThumbnail(video_image)} />
          )}
        </div>
      </div>
      <hr className="border-b-1 border-slate-200 my-8" />
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 pr-4">
          <h2 className="text-xl font-base">Inspiration</h2>
          <p>
            {
              "Choose a brief that inspires a playful future, or select one of our partner briefs and explain why you're building it. We'll use this to communicate your vision in any email newsletters, interviews or social campaigns."
            }
          </p>
        </div>
        <div className="col-span-1">
          <FormField
            control={control}
            name="brief"
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Select a brief you are answering:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Brief" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(Brief).map((brief) => (
                      <SelectItem key={brief} value={brief}>
                        {brief}
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
            name="inspiration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What was the inspiration for this idea?</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <hr className="border-b-1 border-slate-200 my-8" />
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 pr-4">
          <h2 className="text-xl font-base">Tags</h2>
          <p>
            Give your project tags that you believe reflect a future it is
            building towards. These are one word tags like:
          </p>
          <br />
          <p>AI, crypto, worldbuilding, storytelling</p>
        </div>
        <div className="col-span-1">
          <FormField
            control={control}
            name="tags"
            render={({ field }) => (
              <FormItem className="pb-4">
                <FormLabel>Enter your tags separated by commas</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
