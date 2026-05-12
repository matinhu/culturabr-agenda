import { atividadesIniciais } from "@/data/atividades";
import { DetalheAtividade } from "./DetalheAtividade";

export function generateStaticParams() {
  return atividadesIniciais.map((a) => ({ slug: a.slug }));
}

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function PaginaAtividade({ params }: Params) {
  const { slug } = await params;
  return <DetalheAtividade slug={slug} />;
}
