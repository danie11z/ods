import React, {useState} from "react"
import SDG2 from "./assets/fome-zero.svg"
import SDG3 from "./assets/saúde.svg"
import SDG4 from "./assets/edu.svg"

import * as S from "./Components/AppStyle"

export default function App(){

  const [openOne, setOpenOne] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  const [openThree, setOpenThree] = useState(false)

  return(
    <S.Main>
    <S.GlobalStyle />
        <S.SectionOne>
          <S.H1>Os Objetivos de Desenvolvimento Sustentável em Honório Gurgel</S.H1>
          <S.P>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</S.P>
        </S.SectionOne>

        <S.SectionTwo>
          <S.Img onClick={() => {setOpenOne(!openOne)}} src={SDG2} alt="Foto com fundo amarelo e símbolos e letras brancos. Nela, há o número 2 e, ao lado, está escrito Fome Zero e Agricultura Sustentável e há o desenho de uma tigela da qual sai fumaça, abaixo" />
          <S.Img onClick={() => {setOpenTwo(!openTwo)}} src={SDG3} alt="Foto com fundo verde e símbolos e letras brancos. Nela, há o número 3 e, ao lado, está escrito Saúde e Bem-estar e há um símbolo de batimento cardíaco com um coração, abaixo" />
          <S.Img onClick={() => {setOpenThree(!openThree)}} src={SDG4} alt="Foto com fundo vermelho e símbolos e letras brancos. Nela, há o número 4 e, ao lado, está escrito Educação de Qualidade e há o desenho de um caderno e um lápis, abaixo" />
        </S.SectionTwo>

        <S.SectionThree>
        {openOne && (
            <S.DivOne>
              <S.DivOneBtn>
                <S.Button onClick={() => {setOpenOne(!openOne)}}>X</S.Button>
              </S.DivOneBtn>
              <S.H3>Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável</S.H3>
              <S.P>2.1 Até 2030, acabar com a fome e garantir o acesso de todas as pessoas, em particular os pobres e pessoas em situações vulneráveis, incluindo crianças, a alimentos seguros, nutritivos e suficientes durante todo o ano</S.P>
              <S.P>2.2 Até 2030, acabar com todas as formas de desnutrição, incluindo atingir, até 2025, as metas acordadas internacionalmente sobre nanismo e caquexia em crianças menores de cinco anos de idade, e atender às necessidades nutricionais dos adolescentes, mulheres grávidas e lactantes e pessoas idosas</S.P>
              <S.P>2.3 Até 2030, dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos, particularmente das mulheres, povos indígenas, agricultores familiares, pastores e pescadores, inclusive por meio de acesso seguro e igual à terra, outros recursos produtivos e insumos, conhecimento, serviços financeiros, mercados e oportunidades de agregação de valor e de emprego não agrícola</S.P>
              <S.P>2.4 Até 2030, garantir sistemas sustentáveis de produção de alimentos e implementar práticas agrícolas resilientes, que aumentem a produtividade e a produção, que ajudem a manter os ecossistemas, que fortaleçam a capacidade de adaptação às mudanças climáticas, às condições meteorológicas extremas, secas, inundações e outros desastres, e que melhorem progressivamente a qualidade da terra e do solo</S.P>
              <S.P>2.5 Até 2020, manter a diversidade genética de sementes, plantas cultivadas, animais de criação e domesticados e suas respectivas espécies selvagens, inclusive por meio de bancos de sementes e plantas diversificados e bem geridos em nível nacional, regional e internacional, e garantir o acesso e a repartição justa e equitativa dos benefícios decorrentes da utilização dos recursos genéticos e conhecimentos tradicionais associados, como acordado internacionalmente</S.P>
              <S.P>2.a Aumentar o investimento, inclusive via o reforço da cooperação internacional, em infraestrutura rural, pesquisa e extensão de serviços agrícolas, desenvolvimento de tecnologia, e os bancos de genes de plantas e animais, para aumentar a capacidade de produção agrícola nos países em desenvolvimento, em particular nos países menos desenvolvidos</S.P>
              <S.P>2.b Corrigir e prevenir as restrições ao comércio e distorções nos mercados agrícolas mundiais, incluindo a eliminação paralela de todas as formas de subsídios à exportação e todas as medidas de exportação com efeito equivalente, de acordo com o mandato da Rodada de Desenvolvimento de Doha</S.P>
              <S.P>2.c Adotar medidas para garantir o funcionamento adequado dos mercados de commodities de alimentos e seus derivados, e facilitar o acesso oportuno à informação de mercado, inclusive sobre as reservas de alimentos, a fim de ajudar a limitar a volatilidade extrema dos preços dos alimentos</S.P>
            </S.DivOne>
          )}
          
        {openTwo && (
          <S.DivTwo>
            <S.DivTwoBtn>
              <S.Button onClick={() => {setOpenTwo(!openTwo)}}>X</S.Button>
            </S.DivTwoBtn>
            <S.H3>Objetivo 3. Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades</S.H3>
            <S.P>3.1 Até 2030, reduzir a taxa de mortalidade materna global para menos de 70 mortes por 100.000 nascidos vivos</S.P>
            <S.P>3.2 Até 2030, acabar com as mortes evitáveis de recém-nascidos e crianças menores de 5 anos, com todos os países objetivando reduzir a mortalidade neonatal para pelo menos 12 por 1.000 nascidos vivos e a mortalidade de crianças menores de 5 anos para pelo menos 25 por 1.000 nascidos vivos</S.P>
            <S.P>3.3 Até 2030, acabar com as epidemias de AIDS, tuberculose, malária e doenças tropicais negligenciadas, e combater a hepatite, doenças transmitidas pela água, e outras doenças transmissíveis</S.P>
            <S.P>3.4 Até 2030, reduzir em um terço a mortalidade prematura por doenças não transmissíveis via prevenção e tratamento, e promover a saúde mental e o bem-estar</S.P>
            <S.P>3.5 Reforçar a prevenção e o tratamento do abuso de substâncias, incluindo o abuso de drogas entorpecentes e uso nocivo do álcool</S.P>
            <S.P>3.6 Até 2020, reduzir pela metade as mortes e os ferimentos globais por acidentes em estradas</S.P>
            <S.P>3.7 Até 2030, assegurar o acesso universal aos serviços de saúde sexual e reprodutiva, incluindo o planejamento familiar, informação e educação, bem como a integração da saúde reprodutiva em estratégias e programas nacionais</S.P>
            <S.P>3.8 Atingir a cobertura universal de saúde, incluindo a proteção do risco financeiro, o acesso a serviços de saúde essenciais de qualidade e o acesso a medicamentos e vacinas essenciais seguros, eficazes, de qualidade e a preços acessíveis para todos</S.P>
            <S.P>3.9 Até 2030, reduzir substancialmente o número de mortes e doenças por produtos químicos perigosos, contaminação e poluição do ar e água do solo</S.P>
            <S.P>3.a Fortalecer a implementação da Convenção-Quadro para o Controle do Tabaco em todos os países, conforme apropriado</S.P>
            <S.P>3.b Apoiar a pesquisa e o desenvolvimento de vacinas e medicamentos para as doenças transmissíveis e não transmissíveis, que afetam principalmente os países em desenvolvimento, proporcionar o acesso a medicamentos e vacinas essenciais a preços acessíveis, de acordo com a Declaração de Doha, que afirma o direito dos países em desenvolvimento de utilizarem plenamente as disposições do acordo TRIPS sobre flexibilidades para proteger a saúde pública e, em particular, proporcionar o acesso a medicamentos para todos</S.P>
            <S.P>3.c Aumentar substancialmente o financiamento da saúde e o recrutamento, desenvolvimento e formação, e retenção do pessoal de saúde nos países em desenvolvimento, especialmente nos países menos desenvolvidos e nos pequenos Estados insulares em desenvolvimento</S.P>
            <S.P>3.d Reforçar a capacidade de todos os países, particularmente os países em desenvolvimento, para o alerta precoce, redução de riscos e gerenciamento de riscos nacionais e globais de saúde</S.P>
          </S.DivTwo>
        )}

        {openThree && (
          <S.DivTwo>
            <S.DivThreeBtn>
              <S.Button onClick={() => {setOpenThree(!openThree)}}>X</S.Button>
            </S.DivThreeBtn>
            <S.H3>Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos</S.H3>
            <S.P>4.1 Até 2030, garantir que todas as meninas e meninos completem o ensino primário e secundário livre, equitativo e de qualidade, que conduza a resultados de aprendizagem relevantes e eficazes</S.P>
            <S.P>4.2 Até 2030, garantir que todos as meninas e meninos tenham acesso a um desenvolvimento de qualidade na primeira infância, cuidados e educação pré-escolar, de modo que eles estejam prontos para o ensino primário</S.P>
            <S.P>4.3 Até 2030, assegurar a igualdade de acesso para todos os homens e mulheres à educação técnica, profissional e superior de qualidade, a preços acessíveis, incluindo universidade</S.P>
            <S.P>4.4 Até 2030, aumentar substancialmente o número de jovens e adultos que tenham habilidades relevantes, inclusive competências técnicas e profissionais, para emprego, trabalho decente e empreendedorismo</S.P>
            <S.P>4.5 Até 2030, eliminar as disparidades de gênero na educação e garantir a igualdade de acesso a todos os níveis de educação e formação profissional para os mais vulneráveis, incluindo as pessoas com deficiência, povos indígenas e as crianças em situação de vulnerabilidade</S.P>
            <S.P>4.6 Até 2030, garantir que todos os jovens e uma substancial proporção dos adultos, homens e mulheres estejam alfabetizados e tenham adquirido o conhecimento básico de matemática</S.P>
            <S.P>4.7 Até 2030, garantir que todos os alunos adquiram conhecimentos e habilidades necessárias para promover o desenvolvimento sustentável, inclusive, entre outros, por meio da educação para o desenvolvimento sustentável e estilos de vida sustentáveis, direitos humanos, igualdade de gênero, promoção de uma cultura de paz e não violência, cidadania global e valorização da diversidade cultural e da contribuição da cultura para o desenvolvimento sustentável</S.P>
            <S.P>4.a Construir e melhorar instalações físicas para educação, apropriadas para crianças e sensíveis às deficiências e ao gênero, e que proporcionem ambientes de aprendizagem seguros e não violentos, inclusivos e eficazes para todos</S.P>
            <S.P>4.b Até 2020, substancialmente ampliar globalmente o número de bolsas de estudo para os países em desenvolvimento, em particular os países menos desenvolvidos, pequenos Estados insulares em desenvolvimento e os países africanos, para o ensino superior, incluindo programas de formação profissional, de tecnologia da informação e da comunicação, técnicos, de engenharia e programas científicos em países desenvolvidos e outros países em desenvolvimento</S.P>
            <S.P>4.c Até 2030, substancialmente aumentar o contingente de professores qualificados, inclusive por meio da cooperação internacional para a formação de professores, nos países em desenvolvimento, especialmente os países menos desenvolvidos e pequenos Estados insulares em desenvolvimento</S.P>
          </S.DivTwo>
        )}
        </S.SectionThree>
    </S.Main>
  )
}