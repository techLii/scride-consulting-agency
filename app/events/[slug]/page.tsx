import { SingleEvent } from "@/cosmic/blocks/events/SingleEvent";

export default async function SingleEventPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  return (
    <main className="p-4">
      <SingleEvent query={{ slug: params.slug, type: "events" }} />
    </main>
  );
}
