import '../styles/Uniting.css'
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord, FaRegFilePdf, FaWhatsapp } from "react-icons/fa";

export default function Join() {
    const [formData, setFormData] = useState({
        name: "",
        message: ""
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_wellsynthe77",
                "template_0tcfkai",
                formData,
                "FZeqF3nb_av6BaiBt"
            )
            .then(
                (result) => {
                    alert("Mensagem enviada com sucesso!");
                    setFormData({ name: "", message: "" });
                },
                (error) => {
                    alert("Erro ao enviar. Tente novamente.");
                    console.error(error);
                }
            );
    };

    const socialLinks = [
        {
            name: "Instagram",
            icon: <FaInstagram />,
            url: "https://www.instagram.com/syntherracomunity/",
            description: "Dê uma olhada no nosso"
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
            url: "https://github.com/WendelBonucci",
            description: "Dê uma olhada no nosso"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            url: "#",
            description: "Dê uma olhada no nosso"
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp />,
            url: "https://chat.whatsapp.com/FCMvSHzTv1TI5odzDeX3a1?mode=r_t",
            description: "Entre para Comunidade"
        }
    ];

    const roadmaps = [
        {
            name: "Front-End",
            file: "Roadmap-Front-End-Syntherra.pdf"
        },
        {
            name: "Back-End",
            file: "Roadmap-Back-End-Syntherra.pdf"
        },
        {
            name: "Design Gráfico",
            file: "Roadmap-Design-Grafico-Syntherra.pdf"
        }
    ];

    return (
        <section className="CommunityJoinGlobal" id='Junte-se'>
            <h1 className="CommunityJoinTitle">Junte-se a Nossa Comunidade</h1>

            <div className="CommunityJoinContent">
                <div className="CommunityJoinSection">
                    <h1 className='CommunitySectionTitle'>Redes sociais</h1>
                    <div className='CommunityLinksContainer'>
                        {socialLinks.map((social, index) => (
                            <div className='CommunityLinkBox' key={index}>
                                <p className='CommunityLinkDescription'>
                                    {social.description} <a 
                                        className='CommunityLink' 
                                        href={social.url} 
                                        target='_blank'
                                        rel="noopener noreferrer"
                                    >
                                        {social.name} {social.icon}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="CommunityJoinSection">
                    <h1 className='CommunitySectionTitle'>Enviar E-mail</h1>
                    <form onSubmit={handleSubmit} className="CommunityForm">
                        <div className='CommunityInputBox'>
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={handleChange}
                                className="CommunityInput"
                                required
                            />
                        </div>

                        <div className='CommunityInputBox'>
                            <textarea
                                name="message"
                                placeholder="Sua mensagem"
                                value={formData.message}
                                onChange={handleChange}
                                className="CommunityTextarea"
                                rows="4"
                                required
                            />
                        </div>
                        <button type="submit" className="CommunitySubmitBtn">Enviar</button>
                    </form>
                </div>

                <div className='CommunityJoinSection'>
                    <h1 className='CommunitySectionTitle'>Roadmaps</h1>
                    <div className='CommunityRoadmapsContainer'>
                        {roadmaps.map((roadmap, index) => (
                            <div className='CommunityRoadmapBox' key={index}>
                                <a
                                    className='CommunityRoadmapLink'
                                    href={`/documents/${roadmap.file}`}
                                    download={roadmap.file}
                                >
                                    Roadmap {roadmap.name} <FaRegFilePdf />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}