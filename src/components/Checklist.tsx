export default function ChecklistTrekking() {
  return (
    <div className="bg-[#F4F4E9] rounded-2xl p-8 max-w-[1130px] w-full my-8">
      <h2 className="text-[48px] text-[#322F30] font-bold text-center mb-2">
        O que levar para o Trekking?
      </h2>
      <p className="text-center text-[#888888] mb-6 text-[26px]">
        Vamos lá!{" "}
        <a href="#" className="underline">
          Quanto menor o peso, melhor vai ser a sua caminhada.
        </a>
      </p>

      <div className="w-full flex justify-center py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-[#888888] text-[26px] text-start max-w-5xl w-full px-6">
          <ul className="space-y-2 list-disc list-inside">
            <li>2 ou 3 roupas pra caminhar</li>
            <li>Roupa quente pra dormir (15ºC a noite)</li>
            <li>Bota de trilha (Prioridade)</li>
            <li>Chinelo pra ficar de noite</li>
            <li>Capa de chuva</li>
            <li>Chapéu</li>
            <li>Protetor solar</li>
          </ul>

          <ul className="space-y-2 list-disc list-inside">
            <li>Repelente</li>
            <li>Lanterna</li>
            <li>1,5L água por pessoa</li>
            <li>Mochila 30L para todos os itens</li>
            <li>Mochila 10L para ataques</li>
            <li>Bastão de trilha (sugestão)</li>
            <li>Toalha fina ou canga</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
