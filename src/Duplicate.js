<div className="position-relative vh-100">
<Card className="modal-background-color"
 onMouseEnter={() => setPlayPOuse(true)}
 onMouseLeave={() => setPlayPOuse(false)}>
  <div className="card-header">
    <i
      title={"More"}
      className="fa fa-ellipsis-v text-light dot-icon"
      aria-hidden="true"
      onClick={() => shareIconModal("three-rated-dot2")}
    ></i>
    <p className="txt">Wooden Christmas Toys</p>
    <span className="icon-border">
      <Image
        title={"PIP Mode"}
        className="modal-first-para"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pip.svg"
      />
    </span>
    <span className="icon-border">
      {/* <i className="fas fa-volume-mute doticons"></i> */}
      <img
        title={"Mute/Unmute"}
        className="doticons"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/mute.svg"
        alt="Share icon"
        height={"28px"}
        width=""
      ></img>
    </span>
    <span
      className="icon-border"
      id="closeIconId"
      onClick={() => setShow(false)}
    >
      {/* <i className="fa-solid fa-xmark doticons"></i> */}
      <label
        title={"Close"}
        className="close-modal"
        style={{ fontfamily: "arial" }}
      >
        ×
      </label>
    </span>
  </div>

  <div
    className="three-dots-main-div-class-element three-rated-dot2"
    style={{ display: "none" }}
  >
    <ThreeDots
      iconVisitModal={() => shareIconModal("three-rated-dot2")}
    />
  </div>
  <video
    className=" slider-video vidio"
    src={main}
    loop
    autoPlay
    mute
    loading="lazy"
    style={clickModal}
  ></video>

  <div className="modal-button modal_btn">
  {playPouse &&
    <button className="me-2 mb-2 button-border-icon">
      <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pause.svg"
        alt="Play/Pause icon"
        height=""
        width=""
      />
      
    </button>
      }
  </div>
  <div className="modal-button modal_btn"
  style={{display : "none"}}>
    <button className="me-2 mb-2 button-border-icon">
    <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/play.svg"
        alt="Play/Pause icon"
        height=""
        width=""
        />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
  </div>
  <ProgressBar
    className="p-bar"
    now="30"
    style={{ width: "100%" }}
    variant="secondary"
  />
  <div
    className="car-toy-product-component target-image2"
    id="cardProductDiv"
    style={{ display: "none" }}
  >
    <CardProduct
      carPrizeBlog={() => shareIconModal("target-image2")}
    />
  </div>

  <div
    className="Component-position target-code2"
    id="displayDivIdTwo"
    style={{ display: "none" }}
  >
    <Askquestion
      showQuestionDiv={() => shareIconModal("target-code2")}
    />
  </div>
  <div
    className="Toggle-Button2"
    id="share-modal-id"
    style={{ display: "none" }}
  >
    <ShareModal
      showShareModal={() => shareIconModal("Toggle-Button2")}
    />
  </div>
  <Card.Body className="modalcard">
    <div className="d-flex icon-div">
      <span
        className="footer-border me-2"
        onClick={() => shareIconModal("Toggle-Button2")}
      >
        {/* <i
          className="fa fa-share-alt footer-icon "
          aria-hidden="true"
        ></i> */}
        <img
          title={"Share"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/share.svg"
          alt="Share icon"
          height=""
          width=""
        ></img>
      </span>
      <span
        className="footer-border"
        onClick={() => shareIconModal("target-code2")}
      >
        {/* <i className="fa-regular fa-circle-question footer-icon"></i> */}
        <img
          title={"Ask Questions"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/ask-question.svg"
          alt="Ask Question icon"
          height=""
          width=""
        ></img>
      </span>
    </div>

    <div className="d-flex smallcard-border">
      <Card
        className="image-text flex-row"
        onClick={() => shareIconModal("target-image2")}
      >
        <Image className="modalimage" src="/images/woden.jpg" />
        <div className="paragraph-card">
          <p className="modal-ptag">
            {" "}
            Wooden Christmas ₹99 <nbsp />
            <nbsp />
            <nbsp />
            ₹1̶9̶9̶
          </p>{" "}
        </div>
      </Card>
    </div>
  </Card.Body>
</Card>
</div>

<div className="position-relative vh-100">
<Card className="modal-background-color"
 onMouseEnter={() => setPlayPOuse(true)}
 onMouseLeave={() => setPlayPOuse(false)}>
  <div className="card-header">
    <i
      title={"More"}
      class="fa fa-ellipsis-v text-light dot-icon"
      aria-hidden="true"
      onClick={() => shareIconModal("three-rated-dot3")}
    ></i>

    <p className="txt ">Mini BMW Convertible</p>
    <span className="icon-border">
      <Image
        title={"PIP Mode"}
        className="modal-first-para"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pip.svg"
      />
    </span>
    <span className="icon-border">
      {/* <i className="fas fa-volume-mute doticons"></i> */}
      <img
        title={"Mute/Unmute"}
        className="doticons"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/mute.svg"
        alt="Share icon"
        height={"28px"}
        width=""
      ></img>
    </span>
    <span
      className="icon-border"
      id="closeIconId"
      onClick={() => setShow(false)}
    >
      {/* <i className="fa-solid fa-xmark doticons"></i> */}
      <label
        title={"Close"}
        className="close-modal"
        style={{ fontfamily: "arial" }}
      >
        ×
      </label>
    </span>
  </div>
  <div
    className="three-dots-main-div-class-element three-rated-dot3"
    style={{ display: "none" }}
  >
    <ThreeDots
      iconVisitModal={() => shareIconModal("three-rated-dot3")}
    />
  </div>
  <video
    className=" slider-video vidio"
    src={car}
    loop
    autoPlay
    mute
    loading="lazy"
    style={clickModal}
  ></video>

  <div className="modal-button modal_btn">
  {playPouse &&
    <button className="me-2 mb-2 button-border-icon">
      <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pause.svg"
        alt="Play/Pause icon"
        height=""
        width=""
      />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
      }
  </div>
  <div className="modal-button modal_btn"
  style={{display : "none"}}>
    <button className="me-2 mb-2 button-border-icon">
    <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/play.svg"
        alt="Play/Pause icon"
        height=""
        width=""
        />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
  </div>
  <ProgressBar
    className="p-bar"
    now="30"
    style={{ width: "100%" }}
    variant="secondary"
  />
  <div
    className="car-toy-product-component target-image3"
    id="cardProductDiv"
    style={{ display: "none" }}
  >
    <CardProduct
      carPrizeBlog={() => shareIconModal("target-image3")}
    />
  </div>

  <div
    className="Component-position target-code3"
    id="displayDivId"
    style={{ display: "none" }}
  >
    <Askquestion
      showQuestionDiv={() => shareIconModal("target-code3")}
    />
  </div>
  <div
    className="Toggle-Button3"
    id="share-modal-id"
    style={{ display: "none" }}
  >
    <ShareModal
      showShareModal={() => shareIconModal("Toggle-Button3")}
    />
  </div>
  <Card.Body className="modalcard">
    <div className="d-flex icon-div">
      <span
        className="footer-border me-2"
        onClick={() => shareIconModal("Toggle-Button3")}
      >
        {/* <i
          className="fa fa-share-alt footer-icon "
          aria-hidden="true"
        ></i> */}
        <img
          title={"Share"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/share.svg"
          alt="Share icon"
          height=""
          width=""
        ></img>
      </span>
      <span
        className="footer-border"
        onClick={() => shareIconModal("target-code3")}
      >
        {/* <i className="fa-regular fa-circle-question footer-icon"></i> */}
        <img
          title={"Ask Question"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/ask-question.svg"
          alt="Ask Question icon"
          height=""
          width=""
        ></img>
      </span>
    </div>
    <div className="d-flex smallcard-border">
      <Card
        className="image-text flex-row"
        onClick={() => shareIconModal("target-image3")}
      >
        <Image className="modalimage" src="/images/redcar.jpg" />
        <div className="paragraph-card">
          <p className="modal-ptag">
            {" "}
            <b>
              Mini BMW Sedan <br />₹ 599
            </b>
          </p>
        </div>
      </Card>
    </div>
  </Card.Body>
</Card>
</div>

<div className="position-relative vh-100">
<Card className="modal-background-color"
 onMouseEnter={() => setPlayPOuse(true)}
 onMouseLeave={() => setPlayPOuse(false)}>
  <div className="card-header">
    <i
      title={"More"}
      class="fa fa-ellipsis-v text-light dot-icon"
      aria-hidden="true"
      onClick={() => shareIconModal("three-rated-dot4")}
    ></i>
    <p className="txt">Little Rabbit</p>
    <span className="icon-border">
      <Image
        title={"PIP Mode"}
        className="modal-first-para"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pip.svg"
      />
    </span>
    <span className="icon-border">
      {/* <i className="fas fa-volume-mute doticons"></i> */}
      <img
        title={"Mute/Unmute"}
        className="doticons"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/mute.svg"
        alt="Share icon"
        height={"28px"}
        width=""
      ></img>
    </span>
    <span
      className="icon-border"
      id="closeIconId"
      onClick={() => setShow(false)}
    >
      {/* <i className="fa-solid fa-xmark doticons"></i> */}
      <label
        title={"Close"}
        className="close-modal"
        style={{ fontfamily: "arial" }}
      >
        ×
      </label>
    </span>
  </div>

  <div
    className="three-dots-main-div-class-element three-rated-dot4"
    style={{ display: "none" }}
  >
    <ThreeDots
      iconVisitModal={() => shareIconModal("three-rated-dot4")}
    />
  </div>

  <video
    className=" slider-video vidio"
    src={toy}
    loop
    autoPlay
    mute
    loading="lazy"
    style={clickModal}
  ></video>

  <div className="modal-button modal_btn">
  {playPouse &&
    <button className="me-2 mb-2 button-border-icon">
     <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pause.svg"
        alt="Play/Pause icon"
        height=""
        width=""
      />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
      }
  </div>
  <div className="modal-button modal_btn"
  style={{display : "none"}}>
    <button className="me-2 mb-2 button-border-icon">
    <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/play.svg"
        alt="Play/Pause icon"
        height=""
        width=""
        />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
  </div>
  <ProgressBar
    className="p-bar"
    now="30"
    style={{ width: "100%" }}
    variant="secondary"
  />

  <div
    className="car-toy-product-component target-image4"
    id="cardProductDiv"
    style={{ display: "none" }}
  >
    <CardProduct
      carPrizeBlog={() => shareIconModal("target-image4")}
    />
  </div>

  <div
    className="Component-position target-code4"
    id="displayDivId"
    style={{ display: "none" }}
  >
    <Askquestion
      showQuestionDiv={() => shareIconModal("target-code4")}
    />
  </div>
  <div
    className="Toggle-Button4"
    id="share-modal-id"
    style={{ display: "none" }}
  >
    <ShareModal
      showShareModal={() => shareIconModal("Toggle-Button4")}
    />
  </div>

  <Card.Body className="modalcard">
    <div className="d-flex icon-div">
      <span
        className="footer-border me-2"
        onClick={() => shareIconModal("Toggle-Button4")}
      >
        {/* <i
          className="fa fa-share-alt footer-icon "
          aria-hidden="true"
        ></i> */}
        <img
          title={"Share"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/share.svg"
          alt="Share icon"
          height=""
          width=""
        ></img>
      </span>
      <span
        className="footer-border"
        onClick={() => shareIconModal("target-code4")}
      >
        {/* <i className="fa-regular fa-circle-question footer-icon"></i> */}
        <img
          title={"Ask Question"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/ask-question.svg"
          alt="Ask Question icon"
          height=""
          width=""
        ></img>
      </span>
    </div>

    <div className="d-flex smallcard-border">
      <Card
        className="image-text flex-row"
        onClick={() => shareIconModal("target-image4")}
      >
        <Image className="modalimage" src="/images/Rrabbit.jpg" />
        <div className="paragraph-card">
          <p className="modal-ptag">
            {" "}
            Little Rabbit <br />₹ 599
          </p>
        </div>
      </Card>
    </div>
  </Card.Body>
</Card>
</div>

<div className="position-relative vh-100">
<Card className="modal-background-color"
 onMouseEnter={() => setPlayPOuse(true)}
 onMouseLeave={() => setPlayPOuse(false)}>
  <div className="card-header">
    <i
      title={"More"}
      class="fa fa-ellipsis-v text-light dot-icon"
      aria-hidden="true"
      onClick={() => shareIconModal("three-rated-dot5")}
    ></i>
    <p className="txt">Doll House</p>
    <span className="icon-border">
      <Image
        title={"PIP Mode"}
        className="modal-first-para"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pip.svg"
      />
    </span>
    <span className="icon-border">
      {/* <i className="fas fa-volume-mute doticons"></i> */}
      <img
        title={"Mute/Unmute"}
        className="doticons"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/mute.svg"
        alt="Share icon"
        height={"28px"}
        width=""
      ></img>
    </span>
    <span
      className="icon-border"
      id="closeIconId"
      onClick={() => setShow(false)}
    >
      {/* <i className="fa-solid fa-xmark doticons"></i> */}
      <label
        title={"Close"}
        className="close-modal"
        style={{ fontfamily: "arial" }}
      >
        ×
      </label>
    </span>
  </div>

  <div
    className="three-dots-main-div-class-element three-rated-dot5"
    style={{ display: "none" }}
    id="swirlDetailsDiv"
  >
    <ThreeDots
      iconVisitModal={() => shareIconModal("three-rated-dot5")}
    />
  </div>

  <video
    className=" slider-video vidio"
    src={kid}
    loop
    autoPlay
    mute
    loading="lazy"
    style={clickModal}
  ></video>

  <div className="modal-button modal_btn">
  {playPouse &&
    <button className="me-2 mb-2 button-border-icon">
     <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pause.svg"
        alt="Play/Pause icon"
        height=""
        width=""
      />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
      }
  </div>
  <div className="modal-button modal_btn"
  style={{display : "none"}}>
    <button className="me-2 mb-2 button-border-icon">
    <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/play.svg"
        alt="Play/Pause icon"
        height=""
        width=""
        />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
  </div>
  <ProgressBar
    className="p-bar"
    now="30"
    style={{ width: "100%" }}
    variant="secondary"
  />

  <div
    className="car-toy-product-component target-image5"
    id="cardProductDiv"
    style={{ display: "none" }}
  >
    <CardProduct
      carPrizeBlog={() => shareIconModal("target-image5")}
    />
  </div>

  <div
    className="Component-position target-code5"
    id="displayDivId"
    style={{ display: "none" }}
  >
    <Askquestion
      showQuestionDiv={() => shareIconModal("target-code5")}
    />
  </div>
  <div
    className="Toggle-Button5"
    id="share-modal-id"
    style={{ display: "none" }}
  >
    <ShareModal
      showShareModal={() => shareIconModal("Toggle-Button5")}
    />
  </div>

  <Card.Body className="modalcard">
    <div className="d-flex icon-div">
      <span
        className="footer-border me-2 "
        onClick={() => shareIconModal("Toggle-Button5")}
      >
        {/* <i
          className="fa fa-share-alt footer-icon "
          aria-hidden="true"
        ></i> */}
        <img
          title={"Share"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/share.svg"
          alt="Share icon"
          height=""
          width=""
        ></img>
      </span>
      <span
        className="footer-border"
        onClick={() => shareIconModal("target-code5")}
      >
        {/* <i className="fa-regular fa-circle-question footer-icon"></i> */}
        <img
          title={"Ask Question"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/ask-question.svg"
          alt="Ask Question icon"
          height=""
          width=""
        ></img>
      </span>
    </div>
    <div className="d-flex smallcard-border">
      <Card
        className="image-text flex-row"
        onClick={() => shareIconModal("target-image5")}
      >
        <Image className="modalimage" src="/images/doll.jpg" />
        <div className="paragraph-card">
          <p className="modal-ptag">
            {" "}
            Doll House <br />₹ 899
          </p>
        </div>
      </Card>
    </div>
  </Card.Body>
</Card>
</div>

<div className="position-relative vh-100">
<Card className="modal-background-color"
 onMouseEnter={() => setPlayPOuse(true)}
 onMouseLeave={() => setPlayPOuse(false)}>
  <div className="card-header">
    <i
      title={"More"}
      class="fa fa-ellipsis-v text-light dot-icon"
      aria-hidden="true"
      onClick={() => shareIconModal("three-rated-dot6")}
    ></i>
    <p className="txt">Cute Bunny</p>
    <span className="icon-border">
      <Image
        title={"PIP Mode"}
        className="modal-first-para"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pip.svg"
      />
    </span>
    <span className="icon-border">
      {/* <i className="fas fa-volume-mute doticons"></i> */}
      <img
        title={"Mute/Unmute"}
        className="doticons"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/mute.svg"
        alt="Share icon"
        height={"28px"}
        width=""
      ></img>
    </span>
    <span
      className="icon-border"
      id="closeIconId"
      onClick={() => setShow(false)}
    >
      {/* <i className="fa-solid fa-xmark doticons"></i> */}
      <label
        title={"Close"}
        className="close-modal"
        style={{ fontfamily: "arial" }}
      >
        ×
      </label>
    </span>
  </div>

  <div
    className="three-dots-main-div-class-element three-rated-dot6"
    style={{ display: "none" }}
    id="swirlDetailsDiv"
  >
    <ThreeDots
      iconVisitModal={() => shareIconModal("three-rated-dot6")}
    />
  </div>
  <video
    className=" slider-video vidio"
    src={rabit}
    loop
    autoPlay
    mute
    loading="lazy"
    style={clickModal}
  ></video>

  <div className="modal-button modal_btn">
  {playPouse &&
    <button className="me-2 mb-2 button-border-icon">
      <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pause.svg"
        alt="Play/Pause icon"
        height=""
        width=""
      />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
      }
  </div>
  <div className="modal-button modal_btn"
  style={{display : "none"}}>
    <button className="me-2 mb-2 button-border-icon">
    <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/play.svg"
        alt="Play/Pause icon"
        height=""
        width=""
        />

      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
  </div>
  <ProgressBar
    className="p-bar"
    now="30"
    style={{ width: "100%" }}
    variant="secondary"
  />

  <div
    className="car-toy-product-component target-image6"
    id="cardProductDiv"
    style={{ display: "none" }}
  >
    <CardProduct
      carPrizeBlog={() => shareIconModal("target-image6")}
    />
  </div>

  <div
    className="Component-position target-code6"
    id="displayDivId"
    style={{ display: "none" }}
  >
    <Askquestion
      showQuestionDiv={() => shareIconModal("target-code6")}
    />
  </div>
  <div
    className="Toggle-Button6"
    id="share-modal-id"
    style={{ display: "none" }}
  >
    <ShareModal
      showShareModal={() => shareIconModal("Toggle-Button6")}
    />
  </div>
  <Card.Body className="modalcard">
    <div className="d-flex icon-div">
      <span
        className="footer-border me-2"
        onClick={() => shareIconModal("Toggle-Button6")}
      >
        {/* <i
          className="fa fa-share-alt footer-icon "
          aria-hidden="true"
        ></i> */}
        <img
          title={"Share"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/share.svg"
          alt="Share icon"
          height=""
          width=""
        ></img>
      </span>
      <span
        className="footer-border"
        onClick={() => shareIconModal("target-code6")}
      >
        {/* <i className="fa-regular fa-circle-question footer-icon"></i> */}
        <img
          title={"Ask Question"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/ask-question.svg"
          alt="Ask Question icon"
          height=""
          width=""
        ></img>
      </span>
    </div>
    <div className="d-flex smallcard-border">
      <Card
        className="image-text flex-row"
        onClick={() => shareIconModal("target-image6")}
      >
        <Image className="modalimage" src="/images/bunny.jpg" />
        <div className="paragraph-card">
          <p className="modal-ptag">
            {" "}
            Cute Bunny <br />₹ 699
          </p>
        </div>
      </Card>
    </div>
  </Card.Body>
</Card>
</div>

<div className="position-relative vh-100">
<Card className="modal-background-color"
 onMouseEnter={() => setPlayPOuse(true)}
 onMouseLeave={() => setPlayPOuse(false)}>
  <div className="card-header">
    <i
      title={"More"}
      class="fa fa-ellipsis-v text-light dot-icon"
      aria-hidden="true"
      onClick={() => shareIconModal("three-rated-dot7")}
    ></i>
    <p className="txt">Brown Teddy </p>
    <span className="icon-border">
      <Image
        title={"PIP Mode"}
        className="modal-first-para"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pip.svg"
      />
    </span>
    <span className="icon-border">
      {/* <i className="fas fa-volume-mute doticons"></i> */}
      <img
        title={"Mute/Unmute"}
        className="doticons"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/mute.svg"
        alt="Share icon"
        height={"28px"}
        width=""
      ></img>
    </span>
    <span
      className="icon-border"
      id="closeIconId"
      onClick={() => setShow(false)}
    >
      {/* <i className="fa-solid fa-xmark doticons"></i> */}
      <label
        title={"Close"}
        className="close-modal"
        style={{ fontfamily: "arial" }}
      >
        ×
      </label>
    </span>
  </div>
  <div
    className="three-dots-main-div-class-element three-rated-dot7"
    style={{ display: "none" }}
    id="swirlDetailsDiv"
  >
    <ThreeDots
      iconVisitModal={() => shareIconModal("three-rated-dot7")}
    />
  </div>

  <video
    className=" slider-video vidio"
    src={girl}
    loop
    autoPlay
    mute
    loading="lazy"
    style={clickModal}
  ></video>

  <div className="modal-button modal_btn">
  {playPouse &&
    <button className="me-2 mb-2 button-border-icon">
      <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pause.svg"
        alt="Play/Pause icon"
        height=""
        width=""
      />
      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
    }
  </div>
  <div className="modal-button modal_btn"
  style={{display : "none"}}
  >
    <button className="me-2 mb-2 button-border-icon">
    <img
        title={"Play/Pause"}
        className="pause-play-icon"
        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/play.svg"
        alt="Play/Pause icon"
        height=""
        width=""
        />



      {/* <i className="fa fa-play pause-play-icon"></i> */}
    </button>
  </div>
  <ProgressBar
    className="p-bar"
    now="30"
    style={{ width: "100%" }}
    variant="secondary"
  />

  <div
    className="car-toy-product-component target-image7"
    id="cardProductDiv"
    style={{ display: "none" }}
  >
    <CardProduct
      carPrizeBlog={() => shareIconModal("target-image7")}
    />
  </div>

  <div
    className="Component-position target-code7"
    id="displayDivId"
    style={{ display: "none" }}
  >
    <Askquestion
      showQuestionDiv={() => shareIconModal("target-code7")}
    />
  </div>
  <div
    className="Toggle-Button7"
    id="share-modal-id"
    style={{ display: "none" }}
  >
    <ShareModal
      showShareModal={() => shareIconModal("Toggle-Button7")}
    />
  </div>

  <Card.Body className="modalcard">
    <div className="d-flex icon-div">
      <span
        className="footer-border me-2"
        onClick={() => shareIconModal("Toggle-Button7")}
      >
        {/* <i
          className="fa fa-share-alt footer-icon "
          aria-hidden="true"
        ></i> */}
        <img
          title={"Share"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/share.svg"
          alt="Share icon"
          height=""
          width=""
        ></img>
      </span>
      <span
        className="footer-border"
        onClick={() => shareIconModal("target-code7")}
      >
        {/* <i className="fa-regular fa-circle-question footer-icon"></i> */}
        <img
          title={"Ask Question"}
          src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/ask-question.svg"
          alt="Ask Question icon"
          height=""
          width=""
        ></img>
      </span>
    </div>

    <div className="d-flex smallcard-border">
      <Card
        className="image-text flex-row"
        onClick={() => shareIconModal("target-image7")}
      >
        <Image className="modalimage" src="/images/teddy.jpg" />
        <div className="paragraph-card">
          <p className="modal-ptag">
            {" "}
            Brown Teddy <br />₹ 999
          </p>{" "}
        </div>
      </Card>
    </div>
  </Card.Body>
</Card>
</div>