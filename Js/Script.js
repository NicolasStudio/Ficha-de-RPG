//Dados
  let personagem = '';
  let idade = '';
  let altura = '';
  let origem = '';
//Atributos
  let forca = '';
  let inteligencia = '';
  let presenca = '';
  let agilidade = '';
  let vigor = '';
//Perícias
  let acrobacia = '';
  let adestramento = '';
  let artes = '';
  let atletismo = '';
  let atualidades = '';
  let ciencias = '';
  let crime = '';
  let diplomacia = '';
  let enganacao = '';
  let fortitude = '';
  let furtividade  = '';
  let iniciativa = '';
  let intimidacao = '';
  let intuicao = '';
  let investigacao = '';
  let luta = '';
  let medicina = '';
  let ocultismo = '';
  let percepcao = '';
  let pilotagem = '';
  let pontaria = '';
  let profissao = '';
  let qualProfissao = '';
  let reflexos = '';
  let religiao = '';
  let sobrevivencia = '';
  let tatica = '';
  let tecnologia = '';
  let vontade = '';
  //Saúde
  let vidaMax = '';
  let vidaMin = '';
  let saniMax = '';
  let saniMin = '';
  let esforMax = '';
  let esforMin = '';
  //Resistencia
  let resFisica = '';
  let resBalistica = '';
  let resSanidade = '';
  //Defesas
  let passiva = '';
  let esquiva ='';
  //Armas
  let arma1 = '';
  let arma2 = '';
  let arma3 = '';
  let arma4 = '';
  let arma5  = '';
  //Item
  let item1 = '';
  let item2 = '';
  let item3 = '';
  let item4 = '';
  let item5 = '';
  let item6 = '';
  let item7 = '';
  let item8 = '';
  //Detalhes
  let info1 = '';
  let info2 = '';
  let info3 = '';
  let info4 = '';
  let info5 = '';
  let info6 = '';
  let info7 = '';
  let info8 = '';
  //Espaco
  let espaco1 = '';
  let espaco2 = '';
  let espaco3 = '';
  let espaco4 = '';
  let espaco5 = '';
  let espaco6 = '';
  let espaco7 = '';
  let espaco8 = '';
  //Peso
  let peso1 = '';
  let peso2 = '';
  let peso3 = '';
  let peso4 = '';
  let peso5 = '';
  let peso6 = '';
  let peso7 = '';
  let peso8 = '';
  //Soma
  let somaEspaco = '';
  let somaPeso ='';
  //Caracteristicas
  let textohabi ='';
  //Habilidades
  let textoCaract = '';


  function enviar(){
    //Dados
    personagem = document.getElementById("nomePersonagem").value;
    idade = document.getElementById("idadePersonagem").value;
    altura = document.getElementById("alturaPersonagem").value;
    origem = document.getElementById("origemPersonagem").value;

    //Atributos
    forca = document.getElementById("for").value;
    inteligencia = document.getElementById("int").value;
    presenca = document.getElementById("pre").value;
    agilidade = document.getElementById("agi").value;
    vigor = document.getElementById("vig").value;

    //Perícias
    acrobacia = document.getElementById("acrobacia").value;
    adestramento = document.getElementById("adestramento").value;
    artes = document.getElementById("artes").value;
    atletismo = document.getElementById("atletismo").value;
    atualidades = document.getElementById("atualidades").value;
    ciencias = document.getElementById("ciencias").value;
    crime = document.getElementById("crime").value;
    diplomacia = document.getElementById("diplomacia").value;
    enganacao = document.getElementById("enganacao").value;
    fortitude = document.getElementById("fortitude").value;
    furtividade = document.getElementById("furtividade").value;
    iniciativa = document.getElementById("iniciativa").value;
    intimidacao = document.getElementById("intimidacao").value;
    intuicao = document.getElementById("intuicao").value;
    investigacao = document.getElementById("investigacao").value;
    luta = document.getElementById("luta").value;
    medicina = document.getElementById("medicina").value;
    ocultismo = document.getElementById("ocultismo").value;
    percepcao = document.getElementById("percepcao").value;
    pilotagem = document.getElementById("pilotagem").value;
    pontaria = document.getElementById("pontaria").value;
    profissao = document.getElementById("profissao").value;
    qualProfissao = document.getElementById("qualProfissao").value;
    reflexos = document.getElementById("reflexos").value;
    religiao = document.getElementById("religiao").value;
    sobrevivencia = document.getElementById("sobrevivencia").value;
    tatica = document.getElementById("tatica").value;
    tecnologia = document.getElementById("tecnologia").value;
    vontade = document.getElementById("vontade").value;

    //Saúde - Vida -
    vidaMax = document.getElementById("vidaMax").value;
    vidaMin = document.getElementById("vidaMin").value;
    //sanidade
    saniMax = document.getElementById("saniMax").value;
    saniMin = document.getElementById("saniMin").value;
    //Esforço
    esforMax = document.getElementById("esforMax").value;
    esforMin = document.getElementById("esforMin").value;

    //Resistencias
    resFisica = document.getElementById("resFisica").value;
    resBalistica = document.getElementById("resBalistica").value;
    resSanidade = document.getElementById("resSanidade").value;

    //Defesas
    passiva = document.getElementById("passiva").value;
    esquiva = document.getElementById("esquiva").value;

    //Armas
    arma1 = document.getElementById("arma1").value;
    arma2 = document.getElementById("arma2").value;
    arma3 = document.getElementById("arma3").value;
    arma4 = document.getElementById("arma4").value;
    arma5 = document.getElementById("arma5").value;

    //Inventario - Itens -
    item1 = document.getElementById("item1").value;
    item2 = document.getElementById("item2").value;
    item3 = document.getElementById("item3").value;
    item4 = document.getElementById("item4").value;
    item5 = document.getElementById("item5").value;
    item6 = document.getElementById("item6").value;
    item7 = document.getElementById("item7").value;
    item8 = document.getElementById("item8").value;

    //Detalhes
    info1 = document.getElementById("info1").value;
    info2 = document.getElementById("info2").value;
    info3 = document.getElementById("info3").value;
    info4 = document.getElementById("info4").value;
    info5 = document.getElementById("info5").value;
    info6 = document.getElementById("info6").value;
    info7 = document.getElementById("info7").value;
    info8 = document.getElementById("info8").value;

    //Espaco
    espaco1 = document.getElementById("espaco1").value;
    espaco2 = document.getElementById("espaco2").value;
    espaco3 = document.getElementById("espaco3").value;
    espaco4 = document.getElementById("espaco4").value;
    espaco5 = document.getElementById("espaco5").value;
    espaco6 = document.getElementById("espaco6").value;
    espaco7 = document.getElementById("espaco7").value;
    espaco8 = document.getElementById("espaco8").value;

    //Peso
    peso1 = document.getElementById("peso1").value;
    peso2 = document.getElementById("peso2").value;
    peso3 = document.getElementById("peso3").value;
    peso4 = document.getElementById("peso4").value;
    peso5 = document.getElementById("peso5").value;
    peso6 = document.getElementById("peso6").value;
    peso7 = document.getElementById("peso7").value;
    peso8 = document.getElementById("peso8").value;

    //Textos
    textoCaract =  document.getElementById("textoCaract").value;
    textohabi = document.getElementById("textohabi").value;

// peso =  forca * 5;
}

// depois mudar esse botão para recuperar os dadps
function mostrar(){

    //Dados
    const nomePersonagem = document.getElementById("nomePersonagem");
    nomePersonagem.value = personagem;

    const idadePersonagem = document.getElementById("idadePersonagem");
    idadePersonagem.value = idade;
    
    const alturaPersonagem = document.getElementById("alturaPersonagem");
    alturaPersonagem.value = altura;

    const origemPersonagem = document.getElementById("origemPersonagem");
    origemPersonagem.value = origem;

    //Atributos
    const forcaAtr = document.getElementById("for");
    forcaAtr.value = forca;

    const inteligenciaAtr = document.getElementById("int");
    inteligenciaAtr.value = inteligencia;
    
    const presencaAtr = document.getElementById("pre");
    presencaAtr.value = presenca;

    const agilidadeAtr = document.getElementById("agi");
    agilidadeAtr.value = agilidade;
    
    const vigorAtr = document.getElementById("vig");
    vigorAtr.value = vigor;

    //Pericias
    const acrobaciaP = document.getElementById("acrobacia");
    acrobaciaP.value = acrobacia;

    const adestramentoP = document.getElementById("adestramento");
    adestramentoP.value = adestramento;

    const artesP = document.getElementById("artes");
    artesP.value = artes;

    const atletismoP = document.getElementById("atletismo");
    atletismoP.value = atletismo;

    const atualidadesP = document.getElementById("atualidades");
    atualidadesP.value = atualidades;

    const cienciasP = document.getElementById("ciencias");
    cienciasP.value = ciencias;
    
    const crimeP = document.getElementById("crime");
    crimeP.value = crime;
    
    const diplomaciaP = document.getElementById("diplomacia");
    diplomaciaP.value = diplomacia;

    const enganacaoP = document.getElementById("enganacao");
    enganacaoP.value = enganacao;

    const fortitudeP = document.getElementById("fortitude");
    fortitudeP.value = fortitude;

    const furtividadeP = document.getElementById("furtividade");
    furtividadeP.value = furtividade;

    const iniciativaP = document.getElementById("iniciativa");
    iniciativaP.value = iniciativa;

    const intimidacaoP = document.getElementById("intimidacao");
    intimidacaoP.value = intimidacao;

    const intuicaoP = document.getElementById("intuicao");
    intuicaoP.value = intuicao;

    const investigacaoP = document.getElementById("investigacao");
    investigacaoP.value = investigacao;

    const  lutaP = document.getElementById("luta");
    lutaP.value =  luta;
    
    const medicinaP = document.getElementById("medicina");
    medicinaP.value = medicina;
    
    const  ocultismoP = document.getElementById("ocultismo");
    ocultismoP.value =  ocultismo;
    
    const percepcaoP = document.getElementById("percepcao");
    percepcaoP.value = percepcao;

    const  pilotagemP = document.getElementById("pilotagem");
    pilotagemP.value =  pilotagem;
    
    const pontariaP = document.getElementById("pontaria");
    pontariaP.value = pontaria;

    const profissaoP = document.getElementById("profissao");
    profissaoP.value = profissao;

    const qualProfissaoP = document.getElementById("qualProfissao");
    qualProfissaoP.value = qualProfissao;

    const reflexosP = document.getElementById("reflexos");
    reflexosP.value = reflexos;

    const religiaoP = document.getElementById("religiao");
    religiaoP.value = religiao;
    
    const sobrevivenciaP = document.getElementById("sobrevivencia");
    sobrevivenciaP.value = sobrevivencia;

    const taticaP = document.getElementById("tatica");
    taticaP.value = tatica;

    const tecnologiaP = document.getElementById("tecnologia");
    tecnologiaP.value = tecnologia;

    const vontadeP = document.getElementById("vontade");
    vontadeP.value = vontade;

    //Saude
    const vidaMaxS = document.getElementById("vidaMax");
    vidaMaxS.value = vidaMax;

    const vidaMinS = document.getElementById("vidaMin");
    vidaMinS.value = vidaMin;

    const saniMaxS = document.getElementById("saniMax");
    saniMaxS.value = saniMax;

    const saniMinS = document.getElementById("saniMin");
    saniMinS.value = saniMin;

    const esforMaxS = document.getElementById("esforMax");
    esforMaxS.value = esforMax;

    const esforMinS = document.getElementById("esforMin");
    esforMinS.value = esforMin;

    //Resistencias
    const resFisicaR = document.getElementById("resFisica");
    resFisicaR.value = resFisica;

    const resBalisticaR = document.getElementById("resBalistica");
    resBalisticaR.value = resBalistica;    
    
    const resSanidadeR = document.getElementById("resSanidade");
    resSanidadeR.value = resSanidade;

    //Defesa
    const passivaD = document.getElementById("passiva");
    passivaD.value = passiva;

    const esquivaD = document.getElementById("esquiva");
    esquivaD.value = esquiva;

    //Arma
    const arma1A = document.getElementById("arma1");
    arma1A.value = arma1;

    const arma2A = document.getElementById("arma2");
    arma2A.value = arma2;

    const arma3A = document.getElementById("arma3");
    arma3A.value = arma3;

    const arma4A = document.getElementById("arma4");
    arma4A.value = arma4;

    const arma5A = document.getElementById("arma5");
    arma5A.value = arma5;

    //Item
    const item1A = document.getElementById("item1");
    item1A.value = item1;

    const item2A = document.getElementById("item2");
    item2A.value = item2;

    const item3A = document.getElementById("item3");
    item3A.value = item1;

    const item4A = document.getElementById("item4");
    item4A.value = item4;

    const item5A = document.getElementById("item5");
    item5A.value = item5;

    const item6A = document.getElementById("item6");
    item6A.value = item6;

    const item7A = document.getElementById("item7");
    item7A.value = item7;

    const item8A = document.getElementById("item8");
    item8A.value = item8;

    //Informação
    const info1I = document.getElementById("info1");
    info1I.value = info1;

    const info2I = document.getElementById("info2");
    info2I.value = info2;

    const info3I = document.getElementById("info3");
    info3I.value = info3;

    const info4I = document.getElementById("info4");
    info4I.value = info4;

    const info5I = document.getElementById("info5");
    info5I.value = info5;

    const info6I = document.getElementById("info6");
    info6I.value = info6;

    const info7I = document.getElementById("info7");
    info7I.value = info7;

    const info8I = document.getElementById("info8");
    info8I.value = info8;

   //Espaço
   const espaco1E = document.getElementById("espaco1");
   espaco1E.value = espaco1;

   const espaco2E = document.getElementById("espaco2");
   espaco2E.value = espaco2;

   const espaco3E = document.getElementById("espaco3");
   espaco3E.value = espaco3;

   const espaco4E = document.getElementById("espaco4");
   espaco4E.value = espaco4;

   const espaco5E = document.getElementById("espaco5");
   espaco5E.value = espaco5;

   const espaco6E = document.getElementById("espaco6");
   espaco6E.value = espaco6;

   const espaco7E = document.getElementById("espaco7");
   espaco7E.value = espaco7;

   const espaco8E = document.getElementById("espaco8");
   espaco8E.value = espaco8;

   //Peso
   const peso1P = document.getElementById("peso1");
   peso1P.value = peso1;

   const peso2P = document.getElementById("peso2");
   peso2P.value = peso2;

   const peso3P = document.getElementById("peso3");
   peso3P.value = peso3;

   const peso4P = document.getElementById("peso4");
   peso4P.value = peso4;

   const peso5P = document.getElementById("peso5");
   peso5P.value = peso5;

   const peso6P = document.getElementById("peso6");
   peso6P.value = peso6;

   const peso7P = document.getElementById("peso7");
   peso7P.value = peso7;

   const peso8P = document.getElementById("peso8");
   peso8P.value = peso8;

  //Texto - Caracteristicas

  const textoCaractT = document.getElementById("textoCaract");
  textoCaractT.value = textoCaract;

  const textohabiT = document.getElementById("textohabi");
  textohabiT.value = textohabi;
}

function apagar(){
    //Dados
    document.getElementById('nomePersonagem').value='';
    document.getElementById('idadePersonagem').value='';
    document.getElementById('alturaPersonagem').value='';
    document.getElementById('origemPersonagem').value='';

    //Atributos
    document.getElementById('for').value='';
    document.getElementById('int').value='';
    document.getElementById('pre').value='';
    document.getElementById('agi').value='';
    document.getElementById('vig').value='';

    //Perícias
    document.getElementById("acrobacia").value='';
    document.getElementById("adestramento").value='';
    document.getElementById("artes").value='';
    document.getElementById("atletismo").value='';
    document.getElementById("atualidades").value='';
    document.getElementById("ciencias").value='';
    document.getElementById("crime").value='';
    document.getElementById("diplomacia").value='';
    document.getElementById("enganacao").value='';
    document.getElementById("fortitude").value='';
    document.getElementById("furtividade").value='';
    document.getElementById("iniciativa").value='';
    document.getElementById("intimidacao").value='';
    document.getElementById("intuicao").value='';
    document.getElementById("investigacao").value='';
    document.getElementById("luta").value='';
    document.getElementById("medicina").value='';
    document.getElementById("ocultismo").value='';
    document.getElementById("percepcao").value='';
    document.getElementById("pilotagem").value='';
    document.getElementById("pontaria").value='';
    document.getElementById("profissao").value='';
    document.getElementById("qualProfissao").value='';
    document.getElementById("reflexos").value='';
    document.getElementById("religiao").value='';
    document.getElementById("sobrevivencia").value='';
    document.getElementById("tatica").value='';
    document.getElementById("tecnologia").value='';
    document.getElementById("vontade").value='';

    //Saúde - Vida -
    document.getElementById("vidaMax").value=''; // fazer um teste colocando uma variavel no value
    document.getElementById("vidaMin").value='';
    //sanidade
    document.getElementById("saniMax").value='';
    document.getElementById("saniMin").value='';
    //Esforço
    document.getElementById("esforMax").value='';
    document.getElementById("esforMin").value='';

    //Resistencias
    document.getElementById("resFisica").value='';
    document.getElementById("resBalistica").value='';
    document.getElementById("resSanidade").value='';

    //Defesas
    document.getElementById("passiva").value='';
    document.getElementById("esquiva").value='';

    //Armas
    document.getElementById("arma1").value='';
    document.getElementById("arma2").value='';
    document.getElementById("arma3").value='';
    document.getElementById("arma4").value='';
    document.getElementById("arma5").value='';

    //Inventario - Itens -
    document.getElementById("item1").value='';
    document.getElementById("item2").value='';
    document.getElementById("item3").value='';
    document.getElementById("item4").value='';
    document.getElementById("item5").value='';
    document.getElementById("item6").value='';
    document.getElementById("item7").value='';
    document.getElementById("item8").value='';

    //Detalhes
    document.getElementById("info1").value='';
    document.getElementById("info2").value='';
    document.getElementById("info3").value='';
    document.getElementById("info4").value='';
    document.getElementById("info5").value='';
    document.getElementById("info6").value='';
    document.getElementById("info7").value='';
    document.getElementById("info8").value='';

    //Espaco
    document.getElementById("espaco1").value='';
    document.getElementById("espaco2").value='';
    document.getElementById("espaco3").value='';
    document.getElementById("espaco4").value='';
    document.getElementById("espaco5").value='';
    document.getElementById("espaco6").value='';
    document.getElementById("espaco7").value='';
    document.getElementById("espaco8").value='';

    //Peso
    document.getElementById("peso1").value='';
    document.getElementById("peso2").value='';
    document.getElementById("peso3").value='';
    document.getElementById("peso4").value='';
    document.getElementById("peso5").value='';
    document.getElementById("peso6").value='';
    document.getElementById("peso7").value='';
    document.getElementById("peso8").value='';

    //Soma
    document.getElementById("somaEspaco").value='';
    document.getElementById("somaPeso").value='';

    //Texto
    document.getElementById("textoCaract").value='';
    document.getElementById("textohabi").value='';
}