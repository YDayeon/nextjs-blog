type TParams = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: TParams) {
  return <div>{params.slug}</div>;
}
