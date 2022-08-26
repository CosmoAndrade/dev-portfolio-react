import './index.css'

import user from '../../assets/user.jpeg'

const Container = () => {
    return (
        <div className="container">
            <section class="conteudo">

                <article class="sobre">

                    <h2>🙋‍♂️Sobre mim</h2>
                    <p>
                        Oi! Meu nome é Cosmo. Sou Desenvolvedor Full Stack Junior. Em busca da primeira vaga profissional.

                        Graduação: Análise e Desenvolvimento de Sistemas

                        habilidades: Javascript | Python | Java |
                        Reagir JS | Próximo JS | GitHub | Bancos De Dados | HTML e CSS | Bootstrap | Node JS | PHP
                    </p>

                </article>

                <aside class="techs">
                    <h2>👨‍🏫Tecnologias</h2>

                    <div class="cards-container">
                        <div class="card">
                            <i class="fab fa-js"></i>
                        </div>
                        <div class="card">
                            <i class="fab fa-java"></i>
                        </div>
                        <div class="card">
                            <i class="fab fa-html5"></i>
                        </div>
                        <div class="card">
                            <i class="fab fa-css3-alt"></i>
                        </div>
                        <div class="card">
                            <i class="fab fa-python"></i>
                        </div>
                        <div class="card">
                            <i class="fab fa-react"></i>
                        </div>
                        <div class="card">
                            <i class="fab fa-node-js"></i>
                        </div>
                        <div class="card">
                            <i class="fab fa-php"></i>
                        </div>

                    </div>

                </aside>

            </section>

            <figure>
                <img src={user} alt="user" />
                <figcaption>Cosmo Andrade Felix</figcaption>
            </figure>


        </div>
    );
}

export default Container;