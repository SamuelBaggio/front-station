import Navbar from "@/components/Navbar"
import FetchData from './FetchData'

export default function paginaInicial(){
    return(
        <div className="bg-teal-50">
            <Navbar></Navbar>
            <FetchData></FetchData>
            <h2 className="mx-16 mt-4 font-bold leading-tight text-2xl"> Porque comprar na Station? </h2>
            <div className="mx-16 text-justify">
                <p className="mt-4">Na Station, mergulhe em uma jornada de compras online como nenhuma outra. Nossa plataforma foi meticulosamente projetada para proporcionar a você uma experiência de compra virtual incomparável, onde a conveniência encontra a qualidade e a inovação se encontra com a simplicidade. Se você está procurando os últimos lançamentos da moda, produtos eletrônicos de ponta, decoração para casa elegante ou até mesmo presentes exclusivos, você está no lugar certo.</p>
                <p className="mt-4"> Navegue por nossos corredores virtuais, explore nossas ofertas exclusivas e deixe-se encantar por uma seleção cuidadosamente curada que reflete as últimas tendências e inovações. Além disso, nossa equipe dedicada está sempre à disposição para ajudá-lo, proporcionando um atendimento ao cliente excepcional em cada etapa do seu percurso de compras.</p>
                <p className="mt-4"> Estamos mais do que uma loja virtual; somos a sua estação de destino para compras online sem complicações, onde a qualidade se encontra com a praticidade e a paixão pela excelência está em nosso cerne. Estamos empolgados para acompanhá-lo nesta jornada emocionante, onde cada clique o aproxima de descobertas incríveis e experiências de compra inesquecíveis.</p>
                <p className="mt-4 pb-10"> Bem-vindo à Station - sua parada definitiva para tudo o que você ama. Prepare-se para embarcar em uma viagem de compras como nenhuma outra. Estamos ansiosos para servi-lo e tornar suas compras online mais emocionantes, convenientes e gratificantes do que nunca!</p>
            </div>
        </div>
    )
}