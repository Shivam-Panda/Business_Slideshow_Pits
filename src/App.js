import React, { useEffect, useState } from 'react';
import img_1 from './img/img_3978.jpg';
import img_2 from './img/img_6382.jpg';
import img_3 from './img/img_6396.jpg';
import img_4 from './img/IMG_8235.JPG';
import img_5 from './img/IMG_8237.JPG';
import img_6 from './img/IMG_8238.JPG';
import img_7 from './img/IMG_8239.JPG';
import img_8 from './img/IMG_8466.JPG';
import img_9 from './img/IMG_8468.JPG';
import img_10 from './img/IMG_8470.JPG';
import img_11 from './img/IMG_8471.JPG';
import img_12 from './img/IMG_8487.JPG';
import img_13 from './img/IMG_8496.JPG';
import img_14 from './img/IMG_8497.JPG';
import img_15 from './img/IMG_8500.JPG';
import img_16 from './img/IMG_8502.JPG';
import img_17 from './img/IMG_8528.JPG';
import img_18 from './img/IMG_8596.JPG';
import img_19 from './img/IMG_8599.JPG';
import img_20 from './img/IMG_8601.JPG';
import img_21 from './img/IMG_8602.JPG';
import img_22 from './img/IMG_8640.JPG';
import img_23 from './img/IMG_8641.JPG';
import img_24 from './img/IMG_8643.JPG';
import img_25 from './img/IMG_8644.JPG';
import img_26 from './img/IMG_8647.JPG';
import img_27 from './img/IMG_8714.JPG';
import img_28 from './img/IMG_8715.JPG';
import img_29 from './img/IMG_8716.JPG';
import img_30 from './img/IMG_8721.JPG';
import img_31 from './img/IMG_8722.JPG';
import img_32 from './img/IMG_8723.JPG';
import img_33 from './img/IMG_8737.JPG';
import img_34 from './img/IMG_8739.JPG';
import img_35 from './img/IMG_8740.JPG';
import img_36 from './img/IMG_8741.JPG';
import img_37 from './img/IMG_8742.JPG';
import img_38 from './img/IMG_8743.JPG';
import img_39 from './img/IMG_8744.JPG';
import img_40 from './img/IMG_8989.JPG';
import img_41 from './img/IMG_8992.JPG';
import img_42 from './img/IMG_8996.jpg';
import img_43 from './img/IMG_8999.JPG';
import img_44 from './img/IMG_9003.jpg';
import img_45 from './img/IMG_9006.jpg';
import img_46 from './img/IMG_9011.JPG';
import img_47 from './img/IMG_9037.JPG';
import img_48 from './img/IMG_9107.JPG';
import img_49 from './img/IMG_9128.JPG';
import img_50 from './img/IMG_9204.JPG';
import img_51 from './img/IMG_9228.JPG';
import img_52 from './img/IMG_9234.JPG';
import img_53 from './img/IMG_9235.JPG';
import img_54 from './img/IMG_9247.JPG';
import img_55 from './img/IMG_9256.JPG';
import img_56 from './img/IMG_9364.JPG';
import img_57 from './img/IMG_9365.JPG';
import img_58 from './img/IMG_9367.JPG';
import img_59 from './img/IMG_9376.jpg';
import img_60 from './img/IMG_9385.jpg';
import img_61 from './img/IMG_9388.jpg';
import img_62 from './img/IMG_9392.jpg';
import img_63 from './img/IMG_9398.jpg';
import img_64 from './img/IMG_9401.jpg';
import img_65 from './img/IMG_9405.JPG';
import img_66 from './img/IMG_9407.JPG';
import img_67 from './img/IMG_9409.JPG';
import img_68 from './img/IMG_9410.JPG';
import img_69 from './img/IMG_9413.JPG';
import img_70 from './img/IMG_9414.JPG';
import img_71 from './img/IMG_9416.JPG';
import img_72 from './img/IMG_9419.JPG';
import img_73 from './img/IMG_9422.JPG';
import img_74 from './img/IMG_9423.JPG';
import img_75 from './img/IMG_9424.JPG';
import img_76 from './img/IMG_9425.JPG';
import img_77 from './img/IMG_9444.JPG';
import img_78 from './img/IMG_9446.JPG';
import img_79 from './img/IMG_9447.JPG';

let images = [
img_1,
img_2,
img_3,
img_4,
img_5,
img_6,
img_7,
img_8,
img_9,
img_10,
img_11,
img_12,
img_13,
img_14,
img_15,
img_16,
img_17,
img_18,
img_19,
img_20,
img_21,
img_22,
img_23,
img_24,
img_25,
img_26,
img_27,
img_28,
img_29,
img_30,
img_31,
img_32,
img_33,
img_34,
img_35,
img_36,
img_37,
img_38,
img_39,
img_40,
img_41,
img_42,
img_43,
img_44,
img_45,
img_46,
img_47,
img_48,
img_49,
img_50,
img_51,
img_52,
img_53,
img_54,
img_55,
img_56,
img_57,
img_58,
img_59,
img_60,
img_61,
img_62,
img_63,
img_64,
img_65,
img_66,
img_67,
img_68,
img_69,
img_70,
img_71,
img_72,
img_73,
img_74,
img_75,
img_76,
img_77,
img_78,
img_79
]


const App = () => {
  const [s, setS] = useState(images[0])
  const [i, setIndex] = useState(0)

  useEffect(() => {
    (async() => {
      await new Promise(r => setTimeout(r, 5000)).then(() => {
        setIndex(i+1)
        setS(images[i % images.length])
      });
    })();
  }, [s, i])

  return (
    <center>
      <img src={s} max-width="100%" height="auto" alt="Hello" />
    </center>
  )
}

export default App;