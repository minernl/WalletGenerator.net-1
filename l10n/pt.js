module.exports = {
  choosecurrency: "Escolha a moeda",
  singlewallet: "Carteira Única",
  paperwallet: "Carteira de Papel",
  bulkwallet: "Carteira em Massa",
  brainwallet: "Carteira Brain",
  detailwallet: "Detalhes da Carteira",
  donate: "Apoie",
  generatelabelbitcoinaddress: "Gerando novo endereço...",
  generatelabelmovemouse:
    "MOVA seu mouse por aí para aumentar um pouco a aleatoriedade...",
  generatelabelkeypress:
    "OU digite alguns caracteres aleatórios nessa caixa de texto",
  skipMessage:
    "Você pode pular esse passo caso você não planeje usar o gerador de chave aleatória.",
  singlelabelbitcoinaddress: "Endereço público",
  singleshare: "COMPARTILHE",
  singlelabelprivatekey: "Chave Privada (Formato de Importação da Carteira)",
  singlesecret: "SEGREDO",
  securitystep0title: "Passo 0. Siga a lista de recomendações de segurança",
  securitystep0:
    'O primeiro passo é <strong>baixar</strong> esse website do <a href="https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip">Github</a> e abrir o arquivo index.html diretamente de seu computador. É simplesmente muito fácil de esconder algum código malicioso em mais de 6000 linhas de JavaScript para vazar sua chave privada, e você não quer ver seus fundos serem roubados. O controle de versão de código torna muito mais fácil verificar de forma intercalada o que realmente executa. Para segurança extra, <strong>desconecte seu acesso a internet</strong> enquanto gerando sua carteira.',
  securitystep1title: "Passo 1. Gere um endereço novo",
  securitystep1:
    'Escolha sua moeda e clique no botão "Generate new address" (gerar novo endereço).',
  securitystep2title: "Passo 2. Imprima a Carteira de Papel",
  securitystep2:
    "Abra a aba da Carteira de Papel e imprima a página na opção de alta qualidade de impressão. <strong>Nunca salve a página como um arquivo PDF para imprimi-lo depois já que um arquivo é mais fácil ser hackeado do que um pedaço de papel.</strong>",
  securitystep3title: "Passo 3. Dobre a Carteira de Papel",
  securitystep3:
    'Dobre sua nova Carteira de Papel seguindo as linhas.\n<img src="images/foldinginstructions.png" alt="Dobre no meio horizontalmente (em vermelho) e então em três partes, verticalmente."><br>\nVocê pode colocar um lado dentro do outro para "travar" a carteira.',
  securitystep4title: "Passo 4. Compartilhe seu endereço público",
  securitystep4:
    "Use seu endereço público para receber dinheiro de outros usuários da cripto-moeda. Você pode compartilhar seu endereço público o quanto você quiser.",
  securitystep5title: "Passo 5. Mantenha sua chave privada em segredo",
  securitystep5:
    "Sua chave privada é literalmente a chave para seu dinheiro, se alguém conseguisse ela, este conseguiria fazer um saque de seus fundos atualmente na sua carteira, e também quaisquer fundos que seriam depositados na carteira.",
  securitystep6:
    "Por favor, teste gastar uma pequena quantidade de dinheiro antes de receber grandes pagamentos.",
  securitystep7title: "Considere nos apoiar",
  securitystep7:
    'Esse serviço é gratuito e permanecerá gratuito, sem propagandas ou qualquer tipo de rastreamento. Por favor, considere <a href="#" onclick="ninja.tabSwitch(document.getElementById(\'donate\'));">fazer uma doação</a> para nos apoiar e apoiar as pessoas que adicionam suporte para novas moedas.',
  securitychecktitle: "Checklist de Segurança:",
  securitychecklivecd:
    "Você está usando um sistema operacional seguro, garantido de estar livre de spyware e vírus, como por exemplo, um Ubuntu LiveCD?",
  supportedcurrencylbl: "Moedas suportadas!",
  paperlabelencrypt: "Criptografar com BIP38?",
  paperlabelBIPpassphrase: "Senha:",
  bulklabelstartindex: "Índice inicial:",
  bulklabelrowstogenerate: "Quantas linhas gerar:",
  bulklabelcompressed: "Endereços comprimidos?",
  bulklabelcsv:
    "Valores separados por vírgulha: Índice,Endereço,Chave Privada(WIF)",
  brainlabelenterpassphraselbl: "Insira a Senha:",
  brainlabelconfirmlbl: "Confirme a Senha:",
  brainalgorithm: "Algoritmo: SHA256(senha)",
  brainlabelbitcoinaddress: "Endereço público:",
  brainlabelprivatekey: "Chave privada (Formato de Importação da Carteira):",
  detaillabelenterprivatekey: "Insira a Chave Privada:",
  qrcaminstructiontitle: "Escaneie o Código QR usando a sua câmera.",
  paperqrnotsupported:
    "Desculpe, mas seu navegador não suporta os controles de câmera do HTML5. Tente usar uma versão recomendada do Firefox (recomendado), Google Chrome ou Opera.",
  paperqrpermissiondenied:
    '<p>Permissão negada. Seu navegador deve mostrar uma mensagem requisitando o acesso a sua câmera. Por favor, clique no botão "Permitir" para habilitar a câmera.</p>',
  detaillabelpassphrase: "Insira a Senha BIP38",
  detaillabelnote1:
    "Sua Chave Privada é um segredo único que só você sabe. Ela pode ser codificada em diferentes formatos. A baixo está o Endereço Público e a Chave Pública que correspondem a sua Chave Privada, assim como sua Chave Privada na maioria dos formatos populares (WIF, WIFC, HEX, B64).",
  detaillabelbitcoinaddress: "Endereço Público",
  detaillabelbitcoinaddresscomp: "Endereço Público Comprimido",
  detaillabelpublickey: "Chave Pública (130 caracteres [0-9A-F]):",
  detaillabelpublickeycomp:
    "Chave Pública (comprimida, 66 caracteres [0-9A-F]):",
  detaillabelprivwif: "Chave Privada WIF<br>51 caracteres em Base58",
  detaillabelprivwifcomp:
    "Chave Privada WIF comprimida<br>52 caracteres em Base58",
  detaillabelprivhex:
    "Chave Privada no Formato Hexadecimal (64 caracteres [0-9A-F]):",
  detaillabelprivb64: "Chave Privada em Base64 (44 caracteres):",
  detaillabelprivmini:
    "Chave Privada em Formato Mini (22, 26 ou 30 caracteres):",
  detaillabelprivb6: "Chave Privada em Base6 (99 caracteres [0-5]):",
  detaillabelprivbip38:
    "Chave Privada no Formato BIP38 (58 caracteres em Base58):",
  detaillabelq1: "Como faço uma carteira usando dados? O que é o B6?",
  detaila1:
    'Uma parte importante da criação de uma carteira de uma cripto-moeda é garantir que os números usados para criar a carteira são verdadeiramente aleatórios. Aleatoriedade física é melhor que os números pseudo-aleatórios gerados pelo computador. O jeito mais fácil de gerar aleatoriedade física é usando um dado. Para criar uma chave privada de uma cripto-moeda você só precisa de um dado de 6 lados que você joga 99 vezes, parando cada vez para anotar o valor do dado. Quando anotando os valores, siga esse padrão de regras: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0 (apenas substitua o 6 por 0). Fazendo isso você está anotando o grande número aleatório, sua chave privada, no formato Base6 (ou B6). Então você pode inserir a chave privada de 99 caracteres em Base6 na caixa de texto acima e clicar em "View Details" (ver detalhes). Então você verá o endereço público associado com sua chave privada. Você também deve anotar sua chave privada no formato WIF pois esse formato é mais geralmente utilizado.',
  donatetextfooter:
    "Para apoiar o desenvolvimento desse gerador de carteira, você pode doar para os seguintes endereços. Quando o suporte para uma moeda é adicionada por um colaborador ao projeto, ele recebe as doações diretamente.",
  footersupport: "Apoie WalletGenerator.net",
  footerlabelgithub: "Download (GitHub Repository)",
  footerlabelcopyright2:
    "Avisos de Copyright do JavaScript estão incluídos no código-fonte.",
  footerlabelnowarranty: "Sem garantias.",
  defaultTitle:
    "WalletGenerator.net - Gerador Universal de Carteira de Papel para Bitcoin e outras Cripto-moedas.",
  title: "Gerador de Carteira de Papel",
  brainalertpassphrasewarning:
    "Aviso: Escolher uma senha forte é importante para evitar ataques de bruteforce para advinhar sua senha e roubar seus fundos.",
  brainalertpassphrasetooshort: "A senha que você inseriu é pequena de mais.",
  brainalertpassphrasedoesnotmatch: "A senha não coincide com a confirmação.",
  bulkgeneratingaddresses: "Gerando endereços...",
  bip38alertincorrectpassphrase:
    "Senha incorreta para essa chave privada criptografada.",
  bip38alertpassphraserequired: "Senha necessária para chave BIP38",
  detailconfirmsha256:
    "O texto que você inseriu não é uma chave privada válida!\nVocê gostaria de usar o texto inserido como uma senha e criar uma chave privada usando um hash SHA256 da senha?\nAviso: Escolher uma senha forte é importante para evitar ataques de bruteforce para advinhar sua senha e roubar seus fundos.",
  detailalertnotvalidprivatekey:
    "O texto que você inseriu não é uma chave privada válida",
  securitychecklistrandomOK:
    "Seu navegador suporta a geração de chaves criptograficamente aleatórias usando window.crypto.getRandomValues",
  securitychecklistrandomNOK:
    "Seu navegador NÃO supota window.crypto.getRandomValues(), que é importante para gerar os números aleatórios mais seguros possíveis. Por favor, use um navegador mais moderno.",
  securitychecklistofflineNOK:
    "Você aparenta estar usando esse gerador de um site online, o que não é recomendado para a criação de carteiras de valor. Ao invés disso, use o link de download no final da página para baixar o arquivo ZIP do GitHub e rodar esse gerador offline como um arquivo HTML local.",
  securitychecklistofflineOK:
    "Você está usando esse gerador de seu próprio download (offline).",
  paperwalletback:
    "<ul><li>Para depositar fundos nessa Carteira de Papel, envie dinheiro para seu endereço público, a qualquer momento.</li><li>Verifique seu saldo pesquisando por seu endereço público usando um explorador de blockchain como o blockchain.info.</li><li><b>NÃO MOSTRE A CHAVE PRIVADA</b> até que você esteja pronto para importar o saldo para um cliente de cripto-moeda, casa de câmbio (exchange) ou carteira online.</li></ul><b>Valor: </b>___________       <b>Data: </b>_______________<br /><b>Notas :</b> ______________________________________"
};