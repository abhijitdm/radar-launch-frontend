import React from "react";
import * as _Builtin from "./_Builtin";
import Link from "next/link";

export function InspirationFooter({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className="hero-subscribe-right" tag="section">
      <_Builtin.Block className="hero-wrapper full biffer" tag="div">
        <_Builtin.Block className="hero-split right-buffer" tag="div">
          <_Builtin.Heading className="feature-heading" tag="h1">
            {"Still looking for inspiration?"}
          </_Builtin.Heading>
          <_Builtin.Block className="_20px-div" tag="div" />
          <_Builtin.Paragraph className="body-text text-left">
            {
              "The RADAR community of 300+ future seekers are behind RADAR Launch."
            }
            <br />
            <br />
            {
              "To inspire your ideas for a more playful world, we invite you to..."
            }
          </_Builtin.Paragraph>
          <_Builtin.Block className="_20px-div" tag="div" />
          <div className="text-link-arrow">
            <Link className="text-block-43" tag="div" href="https://www.launch.radardao.xyz/brief" target="_blank">
              {"Find inspiration in our creative briefs "}
              <_Builtin.Span className="right-arrow">{"→"}</_Builtin.Span>
            </Link>
          </div>
          <_Builtin.Block className="_10px-div" tag="div" />
          <div className="text-link-arrow">
            <Link
              className="text-block-44"
              tag="div"
              href="https://lu.ma/radarcommunityevents"
              target="_blank"
            >
              {"Register for one of our what-if workshops "}
              <_Builtin.Span className="right-arrow">{"→"}</_Builtin.Span>
            </Link>
          </div>
          <_Builtin.Block className="_10px-div" tag="div" />
          <div className="text-link-arrow">
            <Link
              className="text-block-45"
              tag="div"
              href="https://discord.gg/fpfAsR4nRt"
              target="_blank"
            >
              {"Join our public Discord server to jam on ideas "}
              <_Builtin.Span className="right-arrow">{"→"}</_Builtin.Span>
            </Link>
          </div>
        </_Builtin.Block>
        <_Builtin.Block className="hero-split right" tag="div">
          <_Builtin.Block className="div-block-62" tag="div">
            <_Builtin.Image
              className="image-14"
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64548f6f8feacfafa79c9592/64807b266314396f633f5eee_book_mockup_v2.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
