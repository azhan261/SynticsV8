import React from 'react'

function BaloonMathGame() {
    return (
        <div>
             <div>
        {/* Balloon Pop Maths Home Page, Menu */}
        <section id="heading-section" className="containerBalloonGame-sm">
          {/* Balloon Pop Maths Heading */}
          <div className="row">
            {/* Screens smaller than md */}
            <div className="col-12 d-md-none containerBalloonGame-headingBalloonGame-main text-center">
              <a href="index.html">
                <h1 className="headingBalloonGame-main">Balloon</h1>
                <h1 className="headingBalloonGame-main">Pop
                  <img src="assets/images/balloon-purple-cropped.png" alt="Purple balloon popping" />
                </h1>
                <h1 className="headingBalloonGame-main">Maths</h1>
              </a>
            </div>
            {/* Screens larger than md */}
            <div className="col-12 d-none d-md-block containerBalloonGame-headingBalloonGame-main-large text-center">
              <a href="index.html">
                <h1 className="headingBalloonGame-main">Balloon Pop<img src="assets/images/balloon-purple-cropped.png" alt="Purple balloon popping" /> Maths</h1>
              </a>
            </div>
          </div>
        </section>
        {/* Options */}
        <section id="options-section" className="containerBalloonGame-sm" aria-label="Options Section">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              {/* Game Mode Options */}
              <div className="btn-group btn-group-toggle d-flex w-100 containerBalloonGame-button-group" data-toggle="buttons">
                <label id="multiply" className="btn btn-xl w-100 btn-info btn-text active">
                  <input type="radio" aria-label="Multiplication" name="game-mode" defaultChecked /> x
                </label>
                <label id="divide" className="btn btn-xl w-100 btn-info btn-text">
                  <input type="radio" aria-label="Division" name="game-mode" /> ÷
                </label>
                <label id="add" className="btn btn-xl w-100 btn-info btn-text">
                  <input type="radio" aria-label="Addition" name="game-mode" /> +
                </label>
                <label id="subtract" className="btn btn-xl w-100 btn-info btn-text">
                  <input type="radio" aria-label="Subtraction" name="game-mode" /> -
                </label>
              </div>
              {/* High Score */}
              <div className="containerBalloonGame-button-group d-flex w-100">
                <span id="highscore" className="btn-xl-nofill w-100 btn-text-score">High Score: 0 / 10</span> 
              </div>
              {/* Play Button, hidden until window has finished loading */}
              <div className="containerBalloonGame-button-group d-flex w-100">
                <button id="play" type="button" className="btn btn-xxl w-100 btn-info btn-text">PLAY</button>
              </div>
              {/* Audio Controls */}
              <div className="btn-group btn-group-toggle d-flex w-100 containerBalloonGame-button-group" data-toggle="buttons">
                <label id="audio-on" className="btn btn-xl w-100 btn-info btn-text active">
                  <input type="radio" aria-label="Audio On" name="audio-on" defaultChecked /><i className="fas fa-volume-up" />
                </label>
                <label id="audio-off" className="btn btn-xl w-100 btn-info btn-text">
                  <input type="radio" aria-label="Audio Off" name="audio-off" /><i className="fas fa-volume-mute" />
                </label>
              </div>
              {/* Options Button */}
              <div className="containerBalloonGame-button-group d-flex w-100">
                <button type="button" data-toggle="collapse" data-target="#options" aria-expanded="false" aria-controls="options" className="btn btn-xl w-100 btn-info btn-text">Options</button>
              </div>
            </div>
          </div>
          {/* Collapsing Options */}
          <div className="row collapse" id="options">
            <div className="col-md-2" />
            <div className="col-md-8">
              {/* Options applicable to all games */}
              <div className="btn-group btn-group-toggle d-flex w-100 containerBalloonGame-button-group" data-toggle="buttons">
                <label id="10q" className="btn btn-xl w-100 btn-info btn-text active">
                  <input type="radio" name="questions" defaultChecked /> 10 Questions
                </label>
                <label id="20q" className="btn btn-xl w-100 btn-info btn-text">
                  <input type="radio" name="questions" /> 20 Questions
                </label>
              </div>
              <div className="btn-group btn-group-toggle d-flex w-100 containerBalloonGame-button-group" data-toggle="buttons">
                <label id="easy" className="btn btn-xl w-100 btn-info btn-text active">
                  <input type="radio" name="difficulty" defaultChecked /> Easy
                </label>
                <label id="medium" className="btn btn-xl w-100 btn-info btn-text">
                  <input type="radio" name="difficulty" /> Medium
                </label>
                <label id="hard" className="btn btn-xl w-100 btn-info btn-text">
                  <input type="radio" name="difficulty" /> Hard
                </label>
              </div>
              {/* Multiplication and Division game options */}
              <div id="options-multiply-divide">
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-1" type="button" data-toggle="button" aria-pressed="true" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-toggle active">2x, 5x, 10x</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-2" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-toggle">Mixed 1 to 12</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-3" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">1x</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-4" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">7x</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-5" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">2x</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-6" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">8x</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-7" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">3x</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-8" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">9x</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-9" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">4x</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-10" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">10x</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-11" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">5x</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-12" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">11x</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-13" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">6x</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-mul-div-14" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-mul-div-sticky">12x</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
              </div>
              <div id="options-add-subtract">
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-add-sub-1" type="button" data-toggle="button" aria-pressed="true" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-add-sub-toggle active">Mixed to 10</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-add-sub-2" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-add-sub-toggle">Mixed to 20</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex w-100 containerBalloonGame-button">
                    <span className="containerBalloonGame-button" />
                    <button id="btn-add-sub-3" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-add-sub-toggle">Mixed to 50</button>
                    <span className="containerBalloonGame-button" />
                    <button id="btn-add-sub-4" type="button" data-toggle="button" className="btn btn-xl w-100 btn-info btn-text btn-xl-focus-none btn-add-sub-toggle">Mixed to 100</button>
                    <span className="containerBalloonGame-button" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </section>
        {/* Information */}
        <section id="information-section" className="containerBalloonGame-sm" aria-label="Information Section">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="containerBalloonGame-button-group d-flex w-100">
                <button type="button" data-toggle="collapse" data-target="#information" aria-expanded="false" aria-controls="information" className="btn btn-xl w-100 btn-info btn-text">How To Play</button>
              </div>
            </div>
          </div>
          {/* Collapsing Information */}
          <div className="row collapse" id="information">
            <div className="col-md-2" />
            <div className="col-md-8">
              {/* Information Text */}
              <div className="containerBalloonGame-text-information">
                <p className="text-information">
                  Balloon Pop Maths is a fun and engaging interactive maths game designed to help reinforce maths skills, 
                  and to encourage independent learning. Select game mode (multiply, divide, add or subtract), 
                  hit play and pop some balloons! 
                  Number of questions and difficulty level may be selected in the game options. 
                  Specific groups of questions may also be selected to assist with targeted learning. Please feel free to 
                  <a href="#modal-contact" data-toggle="modal" data-target="#modal-contact"><strong>contact</strong></a> 
                  me with suggestions on how I can improve Ballon Pop Maths, or if you need a developer to make your ideas reality!              
                </p>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </section>
        {/* Game Section */}
        <section id="game-section" className="containerBalloonGame-xl d-none" aria-label="Game Section">
          {/* Home Button */}
          <div id="game-section-home" className="row containerBalloonGame-button-game">
            <div className="col text-left pr-0">
              <button id="btn-game-section-home" type="button" data-toggle="button" className="btn btn-xl btn-info btn-text btn-xl-focus-none">Home
              </button>
            </div>
            <div className="col text-right pl-0">            
              <div id="score" className="btn btn-xl-nofill btn-text-score d-none">Score: 0 / 20</div>
            </div>
          </div>
          {/* Game Loader, shown until window has completed loading */}
          <div id="game-loader" className="containerBalloonGame-xl text-center">
            <div className="containerBalloonGame-loader" />
            <div className="lds-grid"><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
            <div className="containerBalloonGame-loader" />
          </div>
          {/* Game Div, hidden until window has completed loading */}
          <div id="game-canvas-controls" className="d-none">
            {/* Game Canvas, 2 panels - stacked on medium and small devices */}
            <div className="row game-section-balloons p-0 m-0">
              <div className="col-lg-6 p-0 m-0">
                <div className="row canvas-balloon p-0 m-0">
                  <div className="col d-flex justify-content-center p-0 m-0">
                    <canvas id="canvas-balloon-left-1" />
                    <div id="balloon-answer-text-left-1" className="balloon-answer-text balloon-answer-text-top">8</div>
                  </div>
                  <div className="col d-flex justify-content-center p-0 m-0">
                    <canvas id="canvas-balloon-left-2" />
                    <div id="balloon-answer-text-left-2" className="balloon-answer-text balloon-answer-text-bottom">10</div>
                  </div>
                </div>
                <div className="row canvas-balloon p-0 m-0">
                  <div className="col d-flex justify-content-center p-0 m-0">
                    <canvas id="canvas-balloon-left-3" />
                    <div id="balloon-answer-text-left-3" className="balloon-answer-text balloon-answer-text-top">12</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-0 m-0">
                <div className="row canvas-balloon p-0 m-0">
                  <div className="col d-flex justify-content-center p-0 m-0">
                    <canvas id="canvas-balloon-right-1" />
                    <div id="balloon-answer-text-right-1" className="balloon-answer-text balloon-answer-text-top">18</div>
                  </div>
                  <div className="col d-flex justify-content-center p-0 m-0">
                    <canvas id="canvas-balloon-right-2" />
                    <div id="balloon-answer-text-right-2" className="balloon-answer-text balloon-answer-text-bottom">18</div>
                  </div>
                </div>
                <div className="row canvas-balloon p-0 m-0">
                  <div className="col d-flex justify-content-center p-0 m-0">
                    <canvas id="canvas-balloon-right-3" />
                    <div id="balloon-answer-text-right-3" className="balloon-answer-text balloon-answer-text-top">18</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Game Controls - 3 columns, stacked on small and medium devices */}
            <div className="row game-section-controls p-0 m-0">
              <div className="col-lg-4">
                <div className="row">
                  <div id="audio-controls" className="col-2">
                    <i id="mute" className="fas fa-volume-up" />
                  </div>
                  <div id="health" className="col-8">
                    <i id="heart1" className="fas fa-heart" />
                    <i id="heart2" className="fas fa-heart" />
                    <i id="heart3" className="fas fa-heart" />
                    <i id="heart4" className="fas fa-heart" />
                    <i id="heart5" className="fas fa-heart" />
                  </div>
                  <div className="col-2" />
                </div>
              </div>
              <div className="col-lg-4">
                <div id="question">10 x 10</div>                
              </div>
              <div className="col-lg-4">
              </div>
            </div>
          </div>
        </section>
        {/* Feedback modal */}
        <div id="modal-feedback" className="modal" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 id="modal-feedback-headingBalloonGame-text" className="modal-title">Modal Title</h2>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p id="modal-feedback-body-text">Modal content.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact modal */}
        <div id="modal-contact" className="modal" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 id="modal-contact-headingBalloonGame-text" className="modal-title">Contact Developer</h2>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* sendMail javascript function run on submit */}
                <form id="contact" onsubmit="return sendMail(this);">
                  <p>Please feel free to contact me with suggestions on how I can improve Balloon Pop Maths, or if you need a developer to make your ideas reality! </p>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" aria-label="Enter name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" aria-label="Enter email" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="message" name="message" placeholder="Enter message" aria-label="Enter message" maxLength={6000} rows={7} required defaultValue={""} />
                  </div>
                  <div id="form-buttons" className="text-right">
                    <button type="button" className="btn btn-lg btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" id="form-submit" className="btn btn-lg btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default BaloonMathGame
