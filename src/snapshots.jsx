import { HeaderText } from "./header-text";
import { NavBar } from "./navbar";
import Gallery from "react-photo-gallery";
// import loading from "./resources/loading_image.png"; // todo: loading graphic while promise resolves
import { useEffect, useState } from "react";
// import { Button } from "./button";

function importAll(r) {
  return r.keys().map(r);
}

const imports = importAll(
  require.context("./resources/snaps/", false, /\.(png|jpe?g|svg)$/)
);

function imageSize(url) {
  const img = document.createElement("img");

  const promise = new Promise((resolve, reject) => {
    img.onload = () => {
      // Natural size is the actual image size regardless of rendering.
      // The 'normal' `width`/`height` are for the **rendered** size.
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      // Resolve promise with the width and height
      resolve({ width, height });
    };

    // Reject promise on error
    img.onerror = reject;
  });

  // Setting the source makes it start downloading and eventually call `onload`
  img.src = url;

  return promise;
}

const promises = imports.map(async (photo) => {
  const imageDimensions = await imageSize(photo.default);
  return {
    src: photo.default,
    height: imageDimensions.height,
    width: imageDimensions.width,
  };
});

export const Snapshots = () => {
  const [photosResolved, setPhotosResolved] = useState(null);

  useEffect(() => {
    let didMount = true;
    const setter = async () => {
      if (!localStorage.getItem("snaps")) {
        let photoArray = await Promise.all(promises)
          .then((results) => {
            return results;
          })
          .catch((e) => {
            console.error(e);
          });
        localStorage.setItem(
          "snaps",
          JSON.stringify(photoArray.map((photo) => JSON.stringify(photo)))
        );
        setPhotosResolved(photoArray);
      } else {
        setPhotosResolved(
          JSON.parse(localStorage.getItem("snaps")).map((photo) =>
            JSON.parse(photo)
          )
        );
      }
    };
    if (didMount && !photosResolved) {
      setter();
    }
    return function cleanup() {
      didMount = false;
    };
  }, [photosResolved]);

  return (
    <div className="bg-secondary">
      <NavBar active={"Snaps"} />
      <div className="absolute left-1/6 right-1/12 top-24 w-2/3">
        <HeaderText text="me, in pictures" />
        <div className="mt-11 mb-32">
          {photosResolved && (
            <Gallery photos={photosResolved} direction={"column"} />
          )}
        </div>
        {/* <Button
          text="⇑"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          additionalStyles="fixed md:bottom-12 md:right-12 bottom-3 right-3"
        /> */}
      </div>
    </div>
  );
};
