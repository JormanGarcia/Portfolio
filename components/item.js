import Image from "next/image";

export default function item({ img, name, description, demo, github }) {
  return (
    <div className="item">
      <div className="item_image">
        <a href={demo} target="_black">
          <Image width={952} height={595} src={img} />
        </a>
        <a href={demo} target="_black">
          <div className="overlay"></div>
        </a>

        <div className="item_links">
          <a target="_black" href={demo}>
            <img src="/link.svg" />
          </a>
          <a target="_black" href={github}>
            <img src="/github.svg" />
          </a>
        </div>
      </div>
      <div className="item_about">
        <a target="_black" href={demo}>
          <h1 className="item_name">{name}</h1>
        </a>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
