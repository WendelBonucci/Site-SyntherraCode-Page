import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import '../styles/About.css'

function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="Config-Global-About" id="sobre">
            <h1 className="Title-Global-Content">Sobre nossa Comunidade</h1>
            <div className="Division-Config-About">
                <div className="Box-Descrition-About">
                    <h1 className='Title-About'>
                        {isMobile ? (
                            "Syntherra NovaVision Studio Code"
                        ) : (
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Syntherra NovaVision Studio Code")
                                        .callFunction(() => {
                                            console.log('String digitada!');
                                        })
                                        .pauseFor(1000)
                                        .start();
                                }}
                                options={{
                                    delay: 60,
                                    cursor: '',
                                }}
                            />
                        )}
                    </h1>
                    <div className='Descrition-Home'>
                        {isMobile ? (
                            <>
                                <p>Apresento a vocês a <strong>Syntherra NovaVision Studio Code</strong>, um projeto estruturado com dois propósitos centrais:</p>
                                
                                <p><strong><span className='Collor-Alternative'>1. Construção de uma comunidade colaborativa</span></strong><br/>
                                Formada por grupos temáticos que favorecem a troca de conhecimento, networking e crescimento coletivo. Entre eles:</p>
                                <ul>
                                    <li>Front-End</li>
                                    <li>Back-End</li>
                                    <li>Design</li>
                                    <li>Networking</li>
                                    <li>Vagas de Emprego</li>
                                    <li>Academia</li>
                                    <li>Loja Online</li>
                                    <li>Grupo Principal (destinado a avisos e comunicados)</li>
                                </ul>
                                
                                <p><strong><span className='Collor-Alternative'>2. Desenvolvimento de uma startup de programação</span></strong><br/>
                                Voltada à criação e execução de projetos digitais, com foco em oferecer soluções inovadoras, eficientes e de alta qualidade.<br/>
                                Nosso compromisso é entregar resultados consistentes, fortalecendo a confiança e gerando valor para nossos clientes.</p>
                            </>
                        ) : (
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(2000)
                                        .typeString(
                                            "Apresento a vocês a <strong>Syntherra NovaVision Studio Code</strong>, um projeto estruturado com dois propósitos centrais:<br/><br/>" +

                                            "<strong><span class='Collor-Alternative'>1. Construção de uma comunidade colaborativa</span></strong><br/>" +
                                            "Formada por grupos temáticos que favorecem a troca de conhecimento, networking e crescimento coletivo. Entre eles:<br/>" +
                                            "- Front-End<br/>" +
                                            "- Back-End<br/>" +
                                            "- Design<br/>" +
                                            "- Networking<br/>" +
                                            "- Vagas de Emprego<br/>" +
                                            "- Academia<br/>" +
                                            "- Loja Online<br/>" +
                                            "- Grupo Principal (destinado a avisos e comunicados)<br/><br/>" +

                                            "<strong><span class='Collor-Alternative'>2. Desenvolvimento de uma startup de programação</span></strong><br/>" +
                                            "Voltada à criação e execução de projetos digitais, com foco em oferecer soluções inovadoras, eficientes e de alta qualidade.<br/>" +
                                            "Nosso compromisso é entregar resultados consistentes, fortalecendo a confiança e gerando valor para nossos clientes."
                                        )
                                        .start();
                                }}
                                options={{
                                    delay: 15,
                                    cursor: '',
                                }}
                            />
                        )}
                    </div>
                </div>

                <div className="Box-Descrition-About">
                    <h1 className='Title-About'>
                        {isMobile ? (
                            "Origem da Comunidade"
                        ) : (
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Origem da Comunidade")
                                        .callFunction(() => {
                                            console.log('String digitada!');
                                        })
                                        .pauseFor(1000)
                                        .start();
                                }}
                                options={{
                                    delay: 60,
                                    cursor: '',
                                }}
                            />
                        )}
                    </h1>
                    <div className='Descrition-Home'>
                        {isMobile ? (
                            <>
                                <p>A <strong>Syntherra</strong> nasceu com o propósito de apoiar pessoas no mundo da tecnologia, especialmente iniciantes que buscam os primeiros passos.</p>

                                <p>Nossa missão é simples e transparente: <strong>compartilhar conhecimento, gerar oportunidades e criar conexões reais</strong>, sem vínculo com a venda de cursos ou práticas enganosas.</p>

                                <p>A ideia surgiu ainda na faculdade, quando eu <span className='Collor-Alternative'>Wendell</span> (Fundador) e meu amigo <strong><span className='Collor-Alternative'>Guilherme</span></strong> (co-fundador) enfrentamos muitas dificuldades pela falta de suporte. A partir dessa experiência, nos dedicamos intensamente aos estudos e adquirimos conhecimento profissional, transformando nossos desafios em um projeto para ajudar outras pessoas.</p>

                                <p><strong><span className='Collor-Alternative'>Origem do nome</span> Syntherra NovaVision Studio Code:</strong></p>
                                <ul>
                                    <li><strong>Synth</strong> → de <em>synthesize</em>, significa síntese, união e inovação, também remetendo ao <em>synthesizer</em>, símbolo de criatividade.</li>
                                    <li><strong>Therra</strong> → inspirado em Terra, representando planeta, base e origem.</li>
                                    <li><strong>NovaVision</strong> → nova visão, novos projetos, foco no futuro.</li>
                                    <li><strong>Studio Code</strong> → um espaço de codificação e inovação, trazendo novas perspectivas para a tecnologia.</li>
                                </ul>
                            </>
                        ) : (
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(2000)
                                        .typeString(
                                            "A <strong>Syntherra</strong> nasceu com o propósito de apoiar pessoas no mundo da tecnologia, especialmente iniciantes que buscam os primeiros passos.<br/><br/>" +

                                            "Nossa missão é simples e transparente: <strong>compartilhar conhecimento, gerar oportunidades e criar conexões reais</strong>, sem vínculo com a venda de cursos ou práticas enganosas.<br/><br/>" +

                                            "A ideia surgiu ainda na faculdade, quando eu <span class='Collor-Alternative'>Wendell</span> (Fundador) e meu amigo <strong><span class='Collor-Alternative'>Guilherme</span></strong> (co-fundador) enfrentamos muitas dificuldades pela falta de suporte. A partir dessa experiência, nos dedicamos intensamente aos estudos e adquirimos conhecimento profissional, transformando nossos desafios em um projeto para ajudar outras pessoas.<br/><br/>" +

                                            "<strong><span class='Collor-Alternative'>Origem do nome</span> Syntherra NovaVision Studio Code:</strong><br/>" +
                                            "- <strong>Synth</strong> → de <em>synthesize</em>, significa síntese, união e inovação, também remetendo ao <em>synthesizer</em>, símbolo de criatividade.<br/>" +
                                            "- <strong>Therra</strong> → inspirado em Terra, representando planeta, base e origem.<br/>" +
                                            "- <strong>NovaVision</strong> → nova visão, novos projetos, foco no futuro.<br/>" +
                                            "- <strong>Studio Code</strong> → um espaço de codificação e inovação, trazendo novas perspectivas para a tecnologia."
                                        )
                                        .start();
                                }}
                                options={{
                                    delay: 15,
                                    cursor: '',
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About