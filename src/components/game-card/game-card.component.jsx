import Button from "../button/button.component";

import "./game-card.styles.scss";

const games = {
  starburst:
    "https://comeon-static-test.casinomodule.com/games/starburst_mobile_html/game/starburst_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-41e133d5237c402-EUR&gameId=starburst_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  jackhammer:
    "https://comeon-static-test.casinomodule.com/games/jackhammer_mobile_html/game/jackhammer_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-0b3a6e21685c42a-EUR&gameId=jackhammer_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  jackandbeanstalk:
    "https://comeon-static-test.casinomodule.com/games/jackandbeanstalk_mobile_html/game/jackandbeanstalk_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game.casinomodule.com%2F&lang=en&sessId=DEMO-756f72b48bc2493-EUR&gameId=jackandbeanstalk_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  deadoralive:
    "https://comeon-static-test.casinomodule.com/games/deadoralive_mobile_html/game/deadoralive_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-979bbc939ea9412-EUR&gameId=deadoralive_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  twinspin:
    "https://comeon-static-test.casinomodule.com/games/twinspin_mobile_html/game/twinspin_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game.casinomodule.com%2F&lang=en&sessId=DEMO-c813546a446a412-EUR&gameId=twinspin_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
};

const GameCard = ({ game }) => {
  const { name, description, icon, code } = game;

  const handleClick = (code) => {
    // I'm not proud of this but somehow I cannot make it to work
    if (code === "starburst") {
      window.location.assign(games.starburst);
    } else if (code === "jackhammer") {
      window.location.assign(games.jackhammer);
    } else if (code === "jackandbeanstalk") {
      window.location.assign(games.jackandbeanstalk);
    } else if (code === "deadoralive") {
      window.location.assign(games.deadoralive);
    } else window.location.assign(games.twinspin);
  };

  return (
    <>
      <div className="game-card-container">
        <img className="icon" src={require(`../../${icon}`)} alt={`${name}`} />
        <div className="description-container">
          <span className="name">{name}</span>
          <span className="description">{description}</span>
          <div className="btn-container">
            <Button onClick={() => handleClick(code)}>Play</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
