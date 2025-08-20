import '../styles/Community.css'
import { MdWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiGamepad } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaStore } from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";

function Community() {
    const communityGroups = [
        {
            title: "Front End",
            icon: <MdWeb />,
            description: "Nosso grupo de Front-End é um espaço de colaboração, onde membros trocam ideias, compartilham códigos, tiram dúvidas e participam de atividades práticas com apoio dos administradores."
        },
        {
            title: "Back End",
            icon: <FaDatabase />,
            description: "Nosso grupo de Back-End é voltado para atividades práticas, troca de dúvidas e aprendizado em lógica e manipulação de dados, sempre com foco no desenvolvimento colaborativo."
        },
        {
            title: "Design Gráfico",
            icon: <MdOutlineDesignServices />,
            description: "Nosso grupo de Design, mesmo com poucos membros, é um espaço de colaboração, onde compartilhamos trabalhos, trocamos experiências e oferecemos conselhos sobre o mundo do design."
        },
        {
            title: "Networking",
            icon: <FaNetworkWired />,
            description: "Nosso grupo de Networking é voltado para compartilhar postagens, experiências no dia a dia como desenvolvedores e fortalecer conexões no Instagram e LinkedIn."
        },
        {
            title: "Store",
            icon: <FaStore />,
            description: "O grupo de Store (loja online) é um espaço para compartilhar cupons, produtos, experiências de compras e indicações úteis."
        },
        {
            title: "Gamers",
            icon: <GiGamepad />,
            description: "grupo de Gamers é voltado para descontração, com troca de experiências, conversas sobre jogos e interação sobre o universo gamer."
        },
        {
            title: "Vagas de Emprego",
            icon: <MdOutlineWork />,
            description: "O grupo de Vagas de Emprego tem como objetivo compartilhar oportunidades diariamente, além de indicações e apoio mútuo para ingresso no mercado de trabalho."
        },
        {
            title: "Academia",
            icon: <CgGym />,
            description: "O grupo de Academia é um espaço leve para incentivar hábitos saudáveis e práticas esportivas, promovendo equilíbrio além da tecnologia."
        },
        {
            title: "Grupo de Avisos",
            icon: <HiBellAlert />,
            description: "O grupo de Avisos é o canal principal da comunidade, recomendado a todos os membros para acompanhar atualizações e comunicados importantes."
        }
    ];

    return (
        <section className="CommunityGlobalConfig" id='Comunidade'>
            <h1 className="CommunityGlobalTitle">Grupos da Nossa Comunidade</h1>
            <div className="CommunityContentDivision">
                {communityGroups.map((group, index) => (
                    <div className='CommunityBox' key={index}>
                        <h1 className='CommunityBoxTitle'> {group.title} {group.icon}</h1>
                        <div className='CommunityBoxContent'>
                            <p className='CommunityDescription'>{group.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Community