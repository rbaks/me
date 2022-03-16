import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';

const ShareButtons = ({ shareUrl, size }) => {
  return (
    <div className="flex flex-row space-x-2">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={size} round={true} />
      </LinkedinShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={size} round={true} />
      </TwitterShareButton>
      <RedditShareButton url={shareUrl}>
        <RedditIcon size={size} round={true} />
      </RedditShareButton>
    </div>
  );
};

export default ShareButtons;
