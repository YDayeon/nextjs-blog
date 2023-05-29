import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

type TParams = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params: { slug } }: TParams) {
  const markdown: string = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |`;

  return (
    <>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
}
