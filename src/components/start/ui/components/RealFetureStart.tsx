"use client";
import React from "react";
import styles from "/src/app/Landing.module.css";
import Image from "next/image";

const RealFetureStart = () => {
  const cardrocket = "/images/landing/tranparentRocket.svg";
  const uprocket = "/images/landing/uploadrocket2.webp";
  const thumb1 = "/images/landing/thumb1.webp";
  const thumb2 = "/images/landing/thumb2.webp";
  const thumb3 = "/images/landing/thumb3.webp";
  const cardsettings = "/images/landing/transparentSetting.svg";
  const copy = "/images/landing/transparentCopy.svg";
  const dwimg = "/images/landing/download.svg";
  const copimg = "/images/landing/copy.svg";
  const image = "/images/landing/pic.svg";
  const download = "/images/landing/transparentDoenload.svg";
  const driveIcon = "/images/landing/googledrive.webp";
  return (
    <div className={styles.mainGrid} id="realfeatures">
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardcontainer}>
            <div className={styles.textwrap}>
              <Image src={cardrocket} alt="rocket" width={33} height={31} />
              <div className={styles.tag}>Fast and Furious</div>
            </div>
            <div className={styles.title2}>
              Upload multiple creatives at once
            </div>
            <div className={styles.cardDes}>
              Automate your ad creation flow with lightning-fast bulk uploads,
              saved settings, and ad previews — all in one clean dashboard.
            </div>
          </div>

          <div className={styles.uploadContainer}>
            <div className={styles.contentWrap}>
              <div className={styles.uploadHeader}>
                <Image src={uprocket} alt="rocket" width={45} height={45} />
                <div className={styles.subheadspan}>
                  <strong>30 Files uploaded</strong>
                  <div className={styles.subhead}>to a new adset</div>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressBarFill}></div>
              </div>
            </div>

            <div className={styles.thumbnailStack}>
              <Image
                src={thumb2}
                alt="thumb1"
                width={85}
                height={56}
                className={` ${styles.leftcard}`}
              />
              <Image
                src={thumb3}
                alt="thumb2"
                width={85}
                height={56}
                className={`${styles.centercard}`}
              />
              <Image
                src={thumb1}
                alt="thumb3"
                width={85}
                height={56}
                className={`${styles.rightcard}`}
              />
            </div>
          </div>
        </div>
        <div className={styles.card4}>
          <div>
            <div className={styles.textwrap}>
              <Image src={cardsettings} alt="copy" width={24} height={24} />
              <div className={styles.tag}>Every setting everywhere at once</div>
            </div>
            <div className={styles.title2}>
              Persistent Settings Per Ad Account
            </div>
            <div className={styles.cardDes}>
              UTMs, page selections, ad name formulas, all saved, per ad
              account, so nothing resets on reload.
            </div>
          </div>
          <div className={styles.gridwrap1}>
            <div className={styles.gridcontainer}>
              <div className={styles.stepbadge}>1</div>
              <div className={styles.point}>
                Toggle all Meta Creative Enhancements
              </div>
            </div>
            <div className={styles.gridcontainer}>
              <div className={styles.stepbadge}>2</div>
              <div className={styles.point}>Default CTA, Links and UTMs</div>
            </div>
            <div className={styles.gridcontainer}>
              <div className={styles.stepbadge}>3</div>
              <div className={styles.point}>Custom Ad Naming Conventions</div>
            </div>
            <div className={styles.addbutton1}>Auto Populate All Settings</div>
          </div>
        </div>
        <div className={styles.mobilecard2}>
          <div>
            <div className={styles.textwrap}>
              <Image src={copy} alt="copy" width={24} height={24} />
              <div className={styles.tag}>Saving private templates</div>
            </div>
            <div className={styles.title2}>
              Apply saved templates for copy, CTA, and links
            </div>
            <div className={styles.cardDes}>
              Stop wasting time in Meta Ads Manager&apos;s clunky interface.
              Simply select your ideal settings once. We take care of the rest.
            </div>
          </div>

          <div className={styles.gridwrap}>
            <div className={styles.gridcontainer}>
              <Image src={dwimg} alt="rocket" width={18} height={18} />
              <div className={styles.point}>
                Import recently used copy from Meta
              </div>
            </div>
            <div className={styles.gridcontainer}>
              <Image src={copimg} alt="rocket" width={18} height={18} />
              <div className={styles.point}>
                Save Variations of Primary Text and Headlines
              </div>
            </div>
            <div className={styles.gridcontainer}>
              <Image src={image} alt="rocket" width={18} height={18} />
              <div className={styles.point}>Making ads using new template</div>
            </div>
            <div className={styles.addbutton}>+ Add New Template</div>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.mobilecard4}>
          <div>
            <div className={styles.textwrap}>
              <Image src={cardsettings} alt="copy" width={24} height={24} />
              <div className={styles.tag}>Every setting everywhere at once</div>
            </div>
            <div className={styles.title2}>
              Persistent Settings Per Ad Account
            </div>
            <div className={styles.cardDes}>
              UTMs, page selections, ad name formulas, all saved, per ad
              account, so nothing resets on reload.
            </div>
          </div>
          <div className={styles.gridwrap1}>
            <div className={styles.gridcontainer}>
              <div className={styles.stepbadge}>1</div>
              <div className={styles.point}>
                Toggle all Meta Creative Enhancements
              </div>
            </div>
            <div className={styles.gridcontainer}>
              <div className={styles.stepbadge}>2</div>
              <div className={styles.point}>Default CTA, Links and UTMs</div>
            </div>
            <div className={styles.gridcontainer}>
              <div className={styles.stepbadge}>3</div>
              <div className={styles.point}>Custom Ad Naming Conventions</div>
            </div>
            <div className={styles.addbutton1}>Save Settings</div>
          </div>
        </div>
        <div className={styles.card2}>
          <div>
            <div className={styles.textwrap}>
              <Image src={copy} alt="copy" width={24} height={24} />
              <div className={styles.tag}>Saving private templates</div>
            </div>
            <div className={styles.title2}>
              Apply saved templates for copy, CTA, and links
            </div>
            <div className={styles.cardDes}>
              Stop wasting time in Meta Ads Manager&apos;s clunky interface.
              Simply select your ideal settings once. We take care of the rest.
            </div>
          </div>
          <div className={styles.gridwrap}>
            <div className={styles.gridcontainer}>
              <Image src={dwimg} alt="rocket" width={20} height={20} />
              <div className={styles.point}>
                Import recently used copy from Meta
              </div>
            </div>
            <div className={styles.gridcontainer}>
              <Image src={copimg} alt="rocket" width={20} height={20} />
              <div className={styles.point}>
                Save Variations of Primary Text and Headlines
              </div>
            </div>
            <div className={styles.gridcontainer}>
              <Image src={image} alt="rocket" width={20} height={20} />
              <div className={styles.point}>Making ads using new template</div>
            </div>
            <div className={styles.addbutton}>+ Add New Template</div>
          </div>
        </div>
        <div className={styles.card3}>
          <div>
            <div className={styles.textwrap}>
              <Image src={download} alt="rocket" width={24} height={24} />
              <div className={styles.tag}>Arrival</div>
            </div>
            <div className={styles.title2}>No more upload, download hell.</div>
            <div className={styles.cardDes}>
              No need to spend hours downloading hundreds of ad assets. With
              Blip, you can one-click deploy media from your Drive to Meta Ads
              Manager.
            </div>
          </div>

          <div className={styles.uploadContainer1}>
            <div className={styles.uploadIconWrap1}>
              <Image
                src={driveIcon}
                alt="Drive"
                className={styles.drive}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.contentWrap1}>
              <div className={styles.progressBar1}>
                <div className={styles.progressBarFill1}></div>
              </div>
            </div>
            <div className={styles.uploadIconWrap1}>
              <Image
                src="/images/landing/logo.webp"
                alt="Rocket"
                width={92}
                height={92}
                className={styles.rocket}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealFetureStart;
