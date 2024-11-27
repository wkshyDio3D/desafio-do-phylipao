let espaco_1 = " -------------------------------------------------------------------- ";
let espaco_2 = " -                                                                  - ";

console.log(espaco_2);
console.log(espaco_1);

let saudacao = " -- Bom Dia ** git- Gamer **   -- ";
let master = " ** Eu sou master Washington ** ";
console.log(saudacao, master);

console.log(espaco_1);
console.log(espaco_2);

// lista nome dos jogadores
let Jogador_01 = "--  ** Dio Mestre Philipao **   -- ";
let Jogador_02 = "--  ** Master Washington   **   -- ";
let Jogador_03 = "--  ** Batiman  **              -- ";
let Jogador_04 = "--  ** Spider man  **           -- ";
let Jogador_05 = "--  ** Master Univers **        -- ";
let Jogador_06 = "--  ** powerRanger  **          -- ";
let Jogador_07 = "--  ** evaness  **              -- ";
let Jogador_08 = "--  ** Irom man  **             -- ";
let Jogador_09 = "--  ** star Power  **           -- ";
let Jogador_10 = "--  ** mulher Maravilha **      -- ";

// Função para gerar o nível de classificação com base no XP
function getNivelClassificacao(xp) {
  if (xp <= 1000) return 'Ferro';
  if (xp <= 2000) return 'Bronze';
  if (xp <= 5000) return 'Prata';
  if (xp <= 7000) return 'Ouro';
  if (xp <= 8000) return 'Platina';
  if (xp <= 9000) return 'Ascendente';
  if (xp <= 10000) return 'Imortal';
  return 'Radiante';
}

// Lista de jogadores
let jogadores = [
  { nome: Jogador_01, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_02, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_03, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_04, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_05, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_06, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_07, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_08, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_09, xp: Math.floor(Math.random() * 10001) },
  { nome: Jogador_10, xp: Math.floor(Math.random() * 10001) }
];

// Armazenar o jogador vencedor (com maior XP)
let vencedor = jogadores.reduce((prev, current) => (prev.xp > current.xp) ? prev : current);

// Função para formatar a exibição
function formatarSaida(nome, nivel, xp) {
  // Ajuste o tamanho das colunas para garantir que tudo fique alinhado
  let nomeFormatado = nome.padEnd(30, ' '); // Nome vai ter 30 caracteres
  let nivelFormatado = nivel.padEnd(12, ' '); // Nível vai ter 12 caracteres
  let xpFormatado = xp.toString().padStart(5, ' '); // XP vai ter 5 caracteres

  return `O Herói ${nomeFormatado} está no nível de ${nivelFormatado} com XP = ${xpFormatado}`;
}

// Exibindo a classificação de cada jogador
console.log(espaco_1);
jogadores.forEach(jogador => {
  let nivel = getNivelClassificacao(jogador.xp);
  console.log(formatarSaida(jogador.nome, nivel, jogador.xp));
});

console.log(espaco_1);

// Exibindo o vencedor
let vencedorNivel = getNivelClassificacao(vencedor.xp);
console.log(`O Heroi de **${vencedor.nome}** está no nível de **${vencedorNivel}** com XP = **${vencedor.xp}**`);
