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
          <S.Img onClick={() => {setOpenOne (!openOne)}} src={SDG2} alt="Foto com fundo amarelo e símbolos e letras brancos. Nela, há o número 2 e, ao lado, está escrito Fome Zero e Agricultura Sustentável e há o desenho de uma tigela da qual sai fumaça, abaixo" />
          <S.Img onClick={() => {setOpenTwo(!openTwo)}} src={SDG3} alt="Foto com fundo verde e símbolos e letras brancos. Nela, há o número 3 e, ao lado, está escrito Saúde e Bem-estar e há um símbolo de batimento cardíaco com um coração, abaixo" />
          <S.Img onClick={() => {setOpenThree(!openThree)}} src={SDG4} alt="Foto com fundo vermelho e símbolos e letras brancos. Nela, há o número 4 e, ao lado, está escrito Educação de Qualidade e há o desenho de um caderno e um lápis, abaixo" />
        </S.SectionTwo>

        <S.SectionThree>
        {openOne && (
          <S.Div>
            <S.DivOneBtn>
              <S.Button onClick={() => {setOpenOne(!openOne)}}>X</S.Button>
            </S.DivOneBtn>
            <S.H3>Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável</S.H3>
            <S.P>Abriga parte da maior horta urbana do mundo, que possui cerca de 6 mil metros.</S.P>
          </S.Div>
          )}
          
        {openTwo && (
          <S.Div>
            <S.DivTwoBtn>
              <S.Button onClick={() => {setOpenTwo(!openTwo)}}>X</S.Button>
            </S.DivTwoBtn>
            <S.H3>Objetivo 3. Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades</S.H3>
            <S.P>Criação da <b>Clínica da Família Anderson Fernandes 'Filoca'</b>, em 18/09/2016.</S.P>
            <S.P>Abertura da <b>Vila Olímpica Félix Mielli Venerando</b>, em 2012.</S.P>

          </S.Div>
        )}

        {openThree && (
          <S.Div>
            <S.DivThreeBtn>
              <S.Button onClick={() => {setOpenThree(!openThree)}}>X</S.Button>
            </S.DivThreeBtn>
            <S.H3>Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos</S.H3>
            <S.P>Fundação da <b>Escola Municipal Fornovo</b> em 14/11/1997.</S.P>
            <S.P>Atuação da <b>Escola Municipal Silvio Romero</b> desde 1924.</S.P>
            <S.P>Inauguração do <b>Espaço de Desenvolvimento Infantil Karine Lorraine Chagas de Oliveira</b>, em 2011.</S.P>
          </S.Div>
        )}
        </S.SectionThree>
    </S.Main>
  )
}