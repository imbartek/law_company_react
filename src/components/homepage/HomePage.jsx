import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/utils';

const About = styled.div`
    background-color: ${colors.light};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 10%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    margin-bottom: 5%
    
    & header{
        margin-bottom: 5%;
    }
    & p, li{
        margin: 3% 0;
    }
    @media (min-width: 768px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 10%;
        padding: 5%;
    }
`

const HomePage = () => {
    return (
        <About>
            <section>
                <article>
                    <header>
                        <h2>Kim jesteśmy:</h2>
                    </header>
                    <p>Kancelaria Adwokacko-Radcowska Malec-Pawlak z siedzibą w Środzie Śląskiej działa na terenie województwa dolnośląskiego od 2018 r. (Środa Śląska, Wrocław, Świdnica, Legnica, Wołów, Jawor, Oława, Złotoryja i inne).</p>
                </article>
                <article>
                    <header>
                        <h2>Sprawy, w których możemy Państwu pomóc:</h2>
                    </header>
                    <ul>
                        <li>
                            <h3>Prawo spadkowe</h3>
                            <p>Dział spadku, wydziedziczenie, stwierdzenie nabycia spadku, zachowek</p>
                        </li>
                        <li>
                            <h3>Prawo rodzinne</h3>
                            <p>Rozwody, separacje, alimenty, podział majątku, kontakty z dziećmi, władza rodzicielska</p>
                        </li>
                        <li>
                            <h3>Prawo karne</h3>
                            <p>Obrona w sprawach karnych, wykroczeniowych oraz w postępowaniu w sprawach nieletnich, reprezentacja pokrzywdzonych</p>
                        </li>
                        <li>
                            <h3>Odszkodowania</h3>
                            <p>Naruszenie dóbr osobistych, wypadki komunikacyjne</p>
                        </li>
                        <li>
                            <h3>Prawo pracy i ubezpieczeń społecznych</h3>
                            <p>Dochodzenie wynagrodzenia, nadgodziny, wypadki przy pracy, emerytury, renty</p>
                        </li>
                        <li>
                            <h3>Prawo cywilne</h3>
                            <p>Zniesienie współwłasności, sporządzanie i analiza prawna umów, sprawy o zapłatę</p>
                        </li>
                        <li>
                            <h3>Prawo handlowe</h3>
                            <p>Rejestracja spółek osobowych i kapitałowych, obsługa prawna spółek, przekształcenia </p>
                        </li>
                        <li>
                            <h3>Dokumentacja RODO</h3>
                            <p>Sporządzenie i analiza dokumentacji związanej z ochroną danych osobowych zgodnie z wymogami RODO</p>
                        </li>
                    </ul>
                </article>
            </section>
            <section>
                <article>
                    <header>
                        <h2>Co oferujemy:</h2>
                    </header>
                    <ol>
                        <li>Jednym z rodzajów oferowanych usług w Kancelarii jest udzielanie porad prawnych. Porady, w zależności od Państwa wyboru, udzielane są stacjonarnie w siedzibie Kancelarii albo online.
                        <ul>
                                <li>
                                    <h3>ODPŁATNOŚĆ</h3>
                                    <p>Porady prawne udzielane przez prawników Kancelarii są odpłatne. Bezpłatna wycena obejmuje uzyskanie informacji co do estymowanej kwoty za udzielenie porady. Koszt usługi ustalany jest indywidualnie w zależności od poziomu skomplikowania przedstawionego problemu prawnego. Do kwoty wynagrodzenia doliczany jest 23% podatek VAT.</p>
                                </li>
                                <li>
                                    <h3>UDZIELENIE PORADY</h3>
                                    <p>Zachęcamy do kontaktu mailowego lub telefonicznego celem umówienia się na spotkanie.
                                    Kancelaria jest czynna w godzinach 8.00-16.00 od poniedziałku do piątku. Istnieje możliwość umowienia się poza standardowymi godzinami.
                                    Porada polega na udzieleniu informacji co do przedstawionego problemu natury prawnej oraz przedstawienie możliwych jego rozwiązań.
                                Na życzenie Klienta porada może zostać także udzielona w formie pisemnej.</p>
                                </li>
                                <li>
                                    <h3>DALSZE KROKI</h3>
                                    <p>Po udzieleniu porady istnieje możliwość zlecenia sprawy do poprowadzenia Kancelarii (na podstawie sporządzonej umowy zlecenia usług prawnych) z zaliczeniem opłaconej usługi na poczet przyszłego wynagrodzenia.</p>
                                </li>
                            </ul>
                        </li>
                        <li>Najszerszą z oferowanych usług jest prowadzenie spraw Klientów i działanie w ich imieniu.
                        <h4>Oferujemy reprezentację:</h4>
                            <ul>
                                <li>przed sądami</li>
                                <li>w postępowaniu przygotowawczym (Policja, Prokratura, KAS)</li>
                                <li>przed organami administracji publicznej</li>
                                <li>przed organami administracji samorządowej</li>
                                <li>w toku mediacji</li>
                                <li>we wszelkich postepowaniach przedsądowych</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Opinie prawne i inne pisma</h3>
                            <p>Kancelaria zajmuje się także odpłatnym sporządzaniem dla Państwa różnego rodzaju pism oraz opinii prawnych (np. wezwania do zapłaty, projekty pozwów, apelacji, zażaleń, odwołań, skarg).
                        Odplatność za usługę jest ustalana indywidualnie i zależy od obszerności dokumentacji do przeanalizowania oraz poziomu trudności sprawy. Do kwoty wynagrodzenia doliczany jest 23% podatek VAT.</p>
                        </li>
                    </ol>
                </article>
            </section>
        </About>
    );
}

export default HomePage;
