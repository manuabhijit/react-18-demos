import React from "react";

function SnapshotComponent() {
  return (
    <div className="component">
      <p>
        There are two ways to specify the URL in the
        <code>src</code>
        attribute:
      </p>
      <p>
        <strong>1. Absolute URL</strong> - Links to an external image that is
        hosted on another website. Example:
        <span>
          src="https://www.w3schools.com/images/img_girl.jpg"
        </span>
        .
      </p>
      <p>
        <strong>Notes:</strong> External images might be under copyright. If you
        do not get permission to use it, you may be in violation of copyright
        laws. In addition, you cannot control external images; it can suddenly
        be removed or changed.
      </p>
      <p>
        <strong>2. Relative URL</strong> - Links to an image that is hosted
        within the website. Here, the URL does not include the domain name. If
        the URL begins without a slash, it will be relative to the current page.
        Example: src="img_girl.jpg". If the URL begins with a slash, it will be
        relative to the domain. Example: src="/images/img_girl.jpg".
      </p>
      <p>
        <strong>Tip:</strong> It is almost always best to use relative URLs.
        They will not break if you change domain.
      </p>
    </div>
  );
}

export default SnapshotComponent;
