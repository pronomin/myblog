import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  HatenaIcon,
  LineIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { useLocation } from "react-router-dom";

function ShareButton(props) {
  const shareComment = "シェアしたいコメント";
  const shareUrl = useLocation().pathname;
  const iconSize = 30; //アイコンのサイズ
  const isShapeRound = false; //アイコンの形を選択できるtrueでは丸、falseでは四角

  return (
    <div
      className={{
        display: "flex",
        align: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <FacebookShareButton url={shareUrl} quote={shareComment}>
        <FacebookIcon size={iconSize} round={isShapeRound} />{" "}
        {/*Error happens if you use localhost (the same thing happens with linkedin).*/}
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={shareComment}>
        <TwitterIcon size={iconSize} round={isShapeRound} />
      </TwitterShareButton>
      <LineShareButton url={shareUrl} title={shareComment}>
        <LineIcon size={iconSize} round={isShapeRound} />
      </LineShareButton>
      <LinkedinShareButton url={shareUrl} title={shareComment}>
        <LinkedinIcon size={iconSize} round={isShapeRound} />{" "}
        {/*Error happens if you use localhost.*/}
      </LinkedinShareButton>
      <HatenaShareButton
        url={shareUrl}
        title={shareComment}
        windowWidth={660}
        windowHeight={460}
      >
        <HatenaIcon size={iconSize} round={isShapeRound} />
      </HatenaShareButton>
    </div>
  );
}

export { ShareButton };
