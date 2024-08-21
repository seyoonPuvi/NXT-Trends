import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="app-cont">
    <Header />
    <div className="main-cont">
      <div className="home-pg-info-cont">
        <h1 className="title">Clothes That Get YOU Noticed</h1>
        <p className="title-desc">
          Fashion is Part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <div className="home-pg-img-cont">
        <img
          className="home-pg-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
