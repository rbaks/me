import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { siteMetadata } from 'data/siteMetadata';

const Giscus = () => {
  const { theme, resolvedTheme } = useTheme();
  const COMMENTS_ID = 'comments-container';

  useEffect(() => {
    const commentsTheme =
      siteMetadata.comment.giscusConfig.themeURL === ''
        ? theme === 'dark' || resolvedTheme === 'dark'
          ? siteMetadata.comment.giscusConfig.darkTheme
          : siteMetadata.comment.giscusConfig.theme
        : siteMetadata.comment.giscusConfig.themeURL;

    // setEnabledLoadComments(false)
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'rbaks/me');
    script.setAttribute('data-repo-id', 'R_kgDOG_s2Lw');
    script.setAttribute('data-category-id', 'DIC_kwDOG_s2L84COHhu');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('input-position', 'bottom');
    script.setAttribute('data-theme', commentsTheme);
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossOrigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, [theme, resolvedTheme]);

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 w-full dark:text-gray-300">
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  );
};

export default Giscus;
