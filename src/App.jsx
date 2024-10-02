import './App.css';
import { CheckCircle, Ilustration1, Ilustration2, Logo, Server, User, Free, HugeGlobal, Sponsored, Polones, Star, Chinesa, Coreano, Left, Right, Facebook, Twitter, Instagram, Location } from './assets/images'; // Adicionando a imagem Location


export default function App() {
  return (
    <div className='page-container'>
      <header>
        <img src={Logo} alt="logo" />
        <nav className="menu">
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Help</li>
          </ul>
         
        </nav>
        <button className='sign-in'>Sign In</button> 
        <button className='sign-up'>Sign Up</button> 
      </header>
      <main>
        <h1>Want anything to be easy with <strong>LaslesVPN.</strong></h1>
        <p>Provide a network for all your needs with ease and fun using LaslesVPN. Discover interesting features from us.</p>
        <button className="cta-btn">Get Started</button> {/* Adicionado texto ao botão */}
        <img src={Ilustration1} alt="garoto no computador" />
      </main>
      <div className='infos'>
        <ul>
          <li>
            <img src={User} alt="User" />
            <h1>90+</h1>
            <p>Users</p>
          </li>
          <li>
            <img src={Location} alt="Location" /> {/* Importando e corrigindo a imagem de localização */}
            <h1>30+</h1>
            <p>Locations</p>
          </li>
          <li>
            <img src={Server} alt="Server" />
            <h1>50+</h1>
            <p>Servers</p>
          </li>
        </ul>
        <div className="topics-container">
          <img src={Ilustration2} alt="pessoa codando" />
          <aside>
            <h1>We Provide Many Features You Can Use</h1>
            <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <ul>
              <li><img src={CheckCircle} alt="CheckCircle" />Powerful online protection</li> {/* Corrigido o texto */}
              <li><img src={CheckCircle} alt="CheckCircle" />Internet without borders</li> {/* Corrigido o texto */}
              <li><img src={CheckCircle} alt="CheckCircle" />Supercharged VPN</li>
              <li><img src={CheckCircle} alt="CheckCircle" />No specific time limits</li>
            </ul>
          </aside>
        </div>
      </div>
      <div className="class">
        <h1>Choose Your Plan</h1>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        <div className='plans-container'>
          <div className='plan'>
            <img src={Free} alt="caixa" />
            <h2>Free Plan</h2>
            <ul>
              <li>Unlimited Bandwidth</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
            </ul>
            <h2>$12/mo</h2>
            <button className='select-orange'>Select</button>
          </div>
          <div className='plan'>
            <img src={Free} alt="caixa" />
            <h2>Standard Plan</h2>
            <ul>
              <li>Unlimited Bandwidth</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
              <li>Connect Anywhere</li>
            </ul>
            <h2>$9/mo</h2>
            <button className='select'>Select</button>
          </div>
          <div className='plan'>
            <img src={Free} alt="caixa" />
            <h2>Premium Plan</h2>
            <ul>
              <li>Unlimited Bandwidth</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
              <li>Connect Anywhere</li>
              <li>Get New Features</li>
            </ul>
            <h2>Free</h2>
            <button className='select'>Select</button>
          </div>
        </div>
      </div>
      <div className="map-container">
        <h2>Huge Global Network of Fast VPN</h2>
        <p>See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.</p>
        <img src={HugeGlobal} alt="mapa-mundi" />
        <img src={Sponsored} alt="patrocínios" />
      </div>
      <div className="depoimentos">
        <div className='dp'>
          <div className='photo'>
            <img src={Polones} alt="Viez Robert" />
            <h1>Viez Robert</h1>
            <h2>Warsaw</h2>
            <h2>4.5</h2>
            <img src={Star} alt="estrela" />
          </div>
          <div className='message'>
            <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
          </div>
        </div>
        <div className='dp'>
          <div className='photo'>
            <img src={Chinesa} alt="Yessica Christy" />
            <h1>Yessica Christy</h1>
            <h2>Shanxi, China</h2>
            <h2>4.5</h2>
            <img src={Star} alt="estrela" />
          </div>
          <div className='message'>
            <p>“I like it because I like to travel far and still can connect with high speed.”</p>
          </div>
        </div>
        <div className='dp'>
          <div className='photo'>
            <img src={Coreano} alt="Kim Young Jou" />
            <h1>Kim Young Jou</h1>
            <h2>Seoul, South Korea</h2>
            <h2>4.5</h2>
            <img src={Star} alt="estrela" />
          </div>
          <div className='message'>
            <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”</p>
          </div>
        </div>
        <img src={Left} alt="Esquerda" />
        <img src={Right} alt="Direita" />
        <div className='Barra'></div>
        <div className="bolinha"></div>
        <div className="bolinha"></div>
        <div className="bolinha"></div>
      </div>
      <div className='subscribe'>
        <h1>Subscribe Now for Get Special Features!</h1>
        <p>Let's subscribe with us and find the fun.</p>
        <button className='subscribe-btn'>Subscribe</button>
      </div>
      <footer>
        <div>
          <img src={Logo} alt="logo" />
          <p><strong>LaslesVPN</strong> is a private virtual network that has unique features and high security.</p>
        </div>
        <div className='redes'>
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagram} alt="instagram" />
          <p>©2020 LaslesVPN</p>
        </div>
        <div>
          <h1>Product</h1>
          <ul>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h1>Engage</h1>
          <ul>
            <li>LaslesVPN ?</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div></div>
      </footer>
    </div>


  )
}