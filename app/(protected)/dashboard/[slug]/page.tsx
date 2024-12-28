import ActionButton from "@/components/global/generate-button";
import StoryShowcase from "@/features/stories/components/carousel";
import { Sparkles } from "lucide-react";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: Props) => {
  return (
    <div className="flex flex-col gap-y-16 items-center">
      <h3 className="text-lg md:text-2xl lg:text-6xl font-bold">
        Hello {params.slug}!
      </h3>

      <div className="px-12 mx-auto container">
        <StoryShowcase />
      </div>

      <ActionButton text="Generate" icon={<Sparkles size={16} />} />
    </div>
  );
};

export default Page;
