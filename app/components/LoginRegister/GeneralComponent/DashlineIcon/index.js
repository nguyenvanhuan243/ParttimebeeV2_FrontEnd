import React, { PureComponent, PropTypes } from 'react';
import Logo from 'components/LoginRegister/GeneralComponent/Logo/Loadable';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default class DashlineIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    showLogo: PropTypes.bool,
  }
  render() {
    const {
      showLogo = true,
    } = this.props;
    const isSignUpPage = location.pathname.includes('signup') || location.pathname.includes('forgot-password');
    const isCreatedAccount = location.pathname.includes('created-account');
    const showLogoClassNames = classNames('DashlineIcon-logo', {
      'DashlineIcon-logoSignup': isSignUpPage,
      'DashlineIcon-created-account': isCreatedAccount,
    });
    return (
      <div className="DashlineIcon-container">
        <div className="DashlineIcon">
          <div className="DashlineIcon-line">
            <svg
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="1105px"
              height="95px"
              viewBox="0 0 1105 95"
              enableBackground="new 0 0 1105 95"
              xmlSpace="preserve"
            >
              <image
                width={1105}
                height={95}
                x={0}
                y={0}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABFEAAABfCAMAAAAXgqj2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACslBMVEUAAAD/tgD/qgD/qgD/
                rAD/qgD/qgD/rgD/rwD/qgD/qgD/qwD//wD/qgD/rQD/sAD/qgD/qwD/rgD/qgD/qgD/qgD/rgD/
                qgD/qwD/rwD/sQD/qwD/qgD/qgD/qwD/qgD/qgD/qgD/rAD/qgD/qgD/qgD/qwD/qgD/rAD/vwD/
                rgD/rAD/tgD/qgD/qwD/rAD/sQD/qwD/rAD/qwD/qwD/rQD/qwD/rAD/rQD/qwD/qgD/qwD/qgD/
                qwD/qgD/qgD/qwD/qgD/qgD/qwD/rAD/rAD/qgD/qgD/rQD/qwD/qgD/qwD/rAD/qwD/qgD/sQD/
                qgD/qwD/qwD/qwD/qgD/qgD/qgD/qwD/qwD/qgD/rwD/vwD/qgD/qgD/qgD/qgD/qgD/qwD/qwD/
                qgD/qgD/qgD/rAD/swD/qgD/rgD/qgD/rAD//wD/qwD/qwD/qwD/qgD/qwD/tAD/qwD/qwD/rAD/
                qwD/qwD/qwD/qgD/rQD/qgD/qgD/qgD/qwD/qwD/qwD/rQD/qgD/qgD/qgD/qgD/swD/qgD/qwD/
                rAD/qgD/qwD/qgD/qgD/qgD/qwD/rAD/qgD/qwD/qgD/qgD/qgD/qwD/qwD/qgD/rgD/qwD/qgD/
                uQD/qgD/rQD/rAD/qwD/qgD/qgD/qgD/qwD/qwD/qwD/qwD/qgD/qgD/qwD/qgD/qwD/qwD/rQD/
                qgD/qgD/qwD/qwD/qgD/qgD/qgD/zAD/qgD/qwD/qwD/qwD/qgD/qwD/qgD/qgD/qgD/qgD/qwD/
                rAD/qwD/qwD/qgD/qwD/qgD/qwD/rAD/qgD/qgD/qwD/qgD/qwD/qwD/qwD/rAD/rQD/qgD/qgD/
                qwD/qwD/qgD/qgD/qgD/qwD/qgD/rQD/rAD/qwD/qwD/qgD/qwD/qgD/qwD/qgD///9M03KwAAAA
                5HRSTlMAB0ISa/y6EyCx+ToCDzUdzfsm59kMFuGtEBejNlTdBgnkaFf0YF5mUwQpJQ5ddG4Nf0p3
                +DhkZSKRmYjG2tMnUtvMpihZchgZi412R0aBGjOPekAbuK6C/i0jCG+Kn/PAnljx6+VWFB4sOVwB
                hsiaouYRc0Mr7KHCkD5RhGmY1OAcxP08kwq1uTR4fQPBP9FiRb/qqPA9tk4v6bILvh9fYffVIUmV
                aoxadVW39ZtE3oeXcMevewUwT/Kn321j9tKceS5MgKu8w5RN+ujFtKCFpFA7JOLOqtzPyWdsMnGJ
                sNizSHxH7AWCAAAAAWJLR0TlWGULvwAAAAd0SU1FB+IFBxMnEvVzeeQAAAa1SURBVHja7d35WxR1
                HMBx8IhEkEjBwAMCFEFEwgNaUVAxNTXwAhULDbtsvcgzjzLKCrXIPFLLA+8ySzM1S/PqLs0OLdNS
                +/whYdaT7qgtsLufOd6vH78PzryH53GYnZ3vd4KCcFPBDRpqJwCwjUbS+LYQ7QgANnF7k1Bpqh0B
                wJLCbvARJ7yZdhUAS4q4I/JO7QYANhHeXFpEaUcAsInolnfFaDcAAAAAAAAAAAAAAKwgtlVr7QQA
                ttFG2sZpNwCwi/i7JUG7AYBtJCa1006wlJj2yR1SDKOpHdO0wwCYW1yn9M4ZnoP3iEim52AXka7d
                tHMBmFr3mpNHludg9r2uHobZUk1zevbK9RzM692nb6z2MQDQkN/vvv6eYwMG3j8oo+6b7FxzQhqs
                fVwAFAyp+d//gK83WtDa+EmocOiw4doHC8DPRowsKg7IJ5QikVF8FILFjL47UTvBzMLGlKjtO3bs
                g120jx+opWRxaSeY2EOlMk674XpZ48Y/rN0A3BxnlFsILpMJ6doR1xsvEhqsHQHc1OhHHtVOMLHH
                Htcu8BT2RIeJ2g0AbO3J5EK3dgOAaxVMypkcrh1RNxEiMkU7AsC1popMK9eOqBt3VlHvp7QjAFyr
                sHi63hfFcJzyGaa7RwfAquJmiszSjgC8lzl7ztPaDfhbxtx58w2DC555dp52GHxmYWJu/Tdibuki
                MkY7Alc8J1LBJ+qbef6FRdoJ9feiyEvaDX73cuXiJdoNuGLY0ntf8eoHI159sSpMuzbQmshr2gn1
                t+z15c20GwBP2SvEeQuvzpaV2gmATUVlDupf/61Yy6rGI7QTUFfulRHaCcD1CrhEsa43RHrdrh0B
                WNvqdKbW/aPhrDUV07UjbC5u7atvajfAn94SeU67wTzcFp26ZAnr1m8ICirf2Na3Z5QQJoGaS/XM
                8TO0G+AElSKyKSiowLePnmyW5lt4wZOZLOGhDAREVs/lflhraEZLkfbah1ZbUd49fwNbWt+Om7Vm
                5m69NV67oba2yXbtBGhZV3OtvkM7AvaylXuXDvb2OzvHajdYT2q/htoJJtYwtLF2gm+4G7zLfE74
                X0a1yCTtCDPbvEu7wDfGi6zRboADRJe9N2Wh3u7T3p8/QPtX4Ay7W/bYpN0AJ4hT3XsHkUibXATA
                GfLWc5fAxML2fFC6WTsC8FpJhUR2144wjfIhc7UTAGsbvDdpsXaDWWxvLMLMMAC+0S4p58N92hEI
                hPj92gWAWYQlHIjXbrC2NFeZtNGOAExioshHTbUjauvgx/HaCf+pEumTrR3hJE0/WW33efXurKIW
                ldoRdXVo2eE87YZaypUkE62Dv6jTaO0EZ/lUZLl2g59tEpEj2hEOclQWaCdAz7Et1S7tBn/bkFxo
                9+swM+k2kje1AgDgKfj4iS7aDX63e9WOWO0GwBE+u7qGo731FvlcOWG/415AhHpI2PnFHou+VjN5
                6ZdfaTf4XdSB+4foFqR9/Y0plwgsL57wrXYDjBI38rp23NJ30suMf3MOipzUbsANxO+ywhzYwae+
                P6bd4FRRk2ea8f1Fp12F2gmwrEwRYeLjv35YPig/oDvUXUsG1hdstveZ9G81tF+KdoRpnBCJXKcd
                AXjtx8M7l2rO4czQ/gWYXNjxba5g7QjAa9HVIifU9n5wgrTS/g0A8KUBDeK1dh38U8WzCdrHb0HR
                rIQNhOcb3wu/z7dvHXaI2K4y7VAgdpQ99ecR2gcLO9hRWr3A1zdHR4q01T4um4hbe1jOBGA/K0Ml
                NLBfNF318t6cDIXdwn+qkqSiwMfbXLXz7EDt47KNlPxArHzZYEVfjRNKlUgZ85tsxr3Q+MasuXMq
                h3v3rzu3KM3h+98AW5Q43SZzcqrKXHxf7gS/iFQYbnuk9+ljXIZntsivLFwSYOdEIp/XjgC8l3rf
                wN8Mg8tEVhiesizJL9eOdZ7y4qJxqb7e6ICjXC0goErOF/I+Q/M61td1wbuv08b8vvalaMNopZQm
                ax8DALNYLCKGVSBi2ifnGW5zHRHparzEiflDRvEXA8BVKce3NjI8w3+i5jST6Tm47twrITfawukL
                2scAwNSy57jmmXHJAgAAABPZ126wdgIAuyi8KBe1GwDYxUE56+Wj2ADwfzpWsaAU4Fx5jcLrvxEA
                +FtLKW2v3QDALs5fGjVVuwGAfYxg4T0AAGA3KWnaBQDsIvVS6UZfLzcKwF6CT815INernyyWUeNi
                tHMBmFo3ETniORhy8tKZ0Z6DJZe5QgFwa0vyLlQaVo+8XHOa+VO7DIBddDv+Gs/Xw2H+AiZ7hI5W
                Pz99AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA1LTA3VDE5OjM5OjE4LTA3OjAwy+8/CAAAACV0
                RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNS0wN1QxOTozOToxOC0wNzowMLqyh7QAAAAASUVORK5CYII="
              />
            </svg>
          </div>
          <div className="DashlineIcon-icon">
            <svg
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="54px"
              height="47px"
              viewBox="0 0 54 47"
              enableBackground="new 0 0 54 47"
              xmlSpace="preserve"
            >
              <image
                width={54}
                height={47}
                x={0}
                y={0}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAvCAYAAAConDmOAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAO
                M0lEQVRo3tWaeXCVVZbAf+f73pKXfWFJ2BIUQVwAcUjyyAsEZRMRcNxbpUurXWdc2q5Sy5mewelu
                7e5yqh33pcXWsbp16E2cbkS2QBJego4I2ogim+whCSF5eev3fWf+eEkIZAXG0jlVr+q9u5zv/u45
                99xz7/eE76hcddVVqccaj/4Qx1mMyDDQvaisNzzen2/YsGFff/3l2wboDaqp4cgKlGki8jHodoXx
                KJMEwmDcVF1b+97/O7DA1NJfqOM8LCL/WB2se76jvNzvn67Yv1Mk3e2VCZWVtXt602F82xDdoAKB
                HNR5AOSvXaEAqoLB9QbmtaimWTG9qy893zkwtawFqngNQ/7cU/2GYHCjCKtQZvWlx/Vtg5wqghYr
                oIZrfe+NjA9UnccC/uLFgoxx0HoDc1NVMLipo8l3zmLAaECrq6u/7KlSVQXHGQ7kqfKGo/qoIL9y
                1K4L+ItXT5s2bWRygr4FqaioSLGs8DjDkaEAjiOOR+TztcHggYC/ZJWqzszMyUtZsWJF7JR++VYs
                /Loqc0X42iWuhetqarbMmzfP09rceAPKMwj7Xd7UQJ+ueJ3f7zuIcxfozQKFqDQo1JliPLMhGNx8
                GiDpViy2AJyrUSYmouFzAcNGO+xATKHMX3IANA0gFArlAoc6dFw2dWphPBquRchJdpE3K4MbPxER
                gBjwZqC09KCqs9KORe6XPgaTb0UjaxUdLyJRlN2g6QrtppZXXSm++ysrK6O96Zg2deo0R+37FK5E
                1YdIK9CEamF/kyHQgGE8lZqe+Vw8HhcrFtmoSgbCPlTLxeUZ15O7BvzFlagM6XGNVVRUpCdi4UpF
                xxsiT7q8voLq2roLqms3jRKXZxzIW4reYUUjqyoqKlK6Afn9UwP+4tW2Y60HveqCEbGtd8xt/bRs
                fMSD6qiBWFlhkDrOz8OtzbsTsfBaVQpF+AjVckFe7XUNYnysMLxHV7RjkZ+gjEO4rypY91zXunaF
                t5b5iytV9VUrFlkKfK/TyrHwC7baV5smkfILIpUPLmyZ8F5daslrH2TgOCc/55yCBJPGxO1zR0fD
                g7OsSEaa0xKJG0ebmo36j77wNW36NNVpajFuAqYIrFDVhYi8W4DxQK+WVk1XIdTNFWfPnp0Wbj1+
                WGFjTbBuTl+zWl5a/JgDPxOMWRhaoMrTqObMmBBtfmDB8RzLgn97O4etezydfVI8ysxJYRaVRBg3
                Io6IQk68N3/Ur/Z5/+f+f8/PbAkZYxGpGoYxZ1kwGOltTAF/8U5gSzewaX7/VFvtGhF5sDpY9x99
                gVVUVLisaGSrCkWo+nLS9dgTixuzLyqMy44Dbh5amkdzKOnthgE3Tw9xy4xWUr3aqUNMB7ISfbql
                bcMTbwzZszKYViTCepc3dVFlZWVzt7GXld5g287bmDK72xpzTPUAaD9bQSAQyLGikRcQxqLqm35x
                9OCyRw/nXFQYl807PfzDy4M6oYqGWLx8bwN3zm05GUqAVJv+xDThx7fXF80rCzWqMj0RC39wnd/v
                O9l7Sic7tvOciPy5pqZuVefgVVXKp069CezbVbkcSCByUNBNwLKZc+b9YcmSJQ7AtGml4524s7Ij
                Qv70lqbm6RdHswG27Pby0Gu5xBNJ1QtLwjyw4DhuVxJIDIU0C0wFQ/uFOlUefX7o4epPUvNBfmMa
                5uuOairqzAS9G+TTjBzmrFhR1yIAc/z+3Dac5apaJkKzIg2ojkHkgKCDVPEist0l5u22YRzAjteq
                UgDgPz+mv7ytUQB2H3Zz70t5hCJJS10faOO+q46fNDBxO5CROD2aLmLZwo2PjWw53GRmnrC8hBB5
                ISMr5186NnVjyZIlRps6f1VVvwGPFIwoHOr2yiwRCQFuTJkphvEjgSJb7Q1qJdaDDM7LtOsB7pid
                nJzmkMGPlp6Auml6qDsUCqnWGUMBuEzl8TvrMwEHZI+4jBkZ2Qyv3lj7SNdMxbTj0R+o6j2GIYur
                gpte3LZtm71nz/7m0YUjalVZjOptoG0o7wMTgfzS8fE/fl3vmjJ+ZILFl4dwHHjkjTx2HkruHvP+
                LsxDi06BMoDMdhc8SxmSa9ESMtm2x5sjBs+tXVu359Q2hqpzjYhsqtpY91bXivU1detcGJcAH6hy
                jcIjClmZqc6qrBTn6lhCuGxCMuq+uS6DzTuTIX3kIIsfLjwFylTIjIPp8H8lN1/RLKaBYus/9VRv
                ACUCK3uqrAwGv6oOblrgTkkdCnJERKJ3XxHyrtycYgKUjotxsMnFf65L73STf/3eMVI8XcO5JtfU
                GQSKvmRwjs20S9pElUWzysqG9WAxialIn1NpWZFC0KEely5bu9UbABiabTNysMWz72V2RsDvXx5i
                3PATgeGbguqQv7+sBUAias3vBoboLlSv6FODxWKACUUx+6MdXgPgvGEJ9ta7qN6WTBUzUh1uCIRO
                QHF2ULv2e9i539Nnm4ljoqSmKD6PfX03MEONN1W1uKy09PpeNQgzRDh6oMk1u6PonPwE/1Wd3tnk
                xvI2fF02X9Kts7LUw88O5fuPD2dlbXqvbQwDJoyJYNvi71aXL/IGwmeI/jrg93czaXv2Pl5VvAcb
                zU5fLhxiUflpu7V8DteWdbGW2wFPV++WekR6SQh7lo51Wv1J6olCywWHhsCXo2H3CIi7mXhejFhC
                Uuf4/bld+7uWBYORGWVl1yacxDpVe3nAX7xMDeM3HsxdCbHSrVjkVlV1AZkuU9Wykye7SMygJZzc
                s2ZOinSmSgI9pEnyDOr4gSsHCnb1jBae/l0eORk2xD1waDBEUjqPpsS8yOEhjMpvBqDN1POAuk4w
                gHU1NV9UVFRMtmKRX6vqddjO9XG6x5OLz4lbm3d43aYJzeETaWbZ+C4neI/TLaxbti75S03m8bQU
                m8untCVzxH7kmstaCEwKk5vhwL4RaNzdvVHUQ2Z6chIN1byTLNbxpbKy8jAwv8LvP99WneWIjgQO
                imq+wiMA44bFjc07vIzIs2g4bnS6zORzu4C5nK3AhK4PefEPua53VmXmAbSFG1lY0TIgqw3NAg4U
                qMbdPU+FL0pWe0C3kZMWdLeDZmUwuB3Y3vE74PfPR+1HAFJcyVutiaPjHDpmAjDlvFhngguAyQZE
                9qC6oLOoSxD5ZEfKgMHYnx/WiDe1pyrJaINh9biPJMdhOCdvWf1ev5kijR3f//a1px0mSmNLck6K
                hpyS+7md21B+AdLWUfSDBceomNxGbqbNsEEDTYCllqjX7LFGgLxjIA6Nx9vBRJr6tNip4k5N3WaF
                kjP84Q6viMClY+K89H6yPiP11LWoaYj8ErgXZSlgejzKT++pHyAQIDigUbJavDRnnlxl2jDsCKQk
                3b+p1ewY50l3IP2CrV69+nigtGQ3QjZodl6mLRk+h2gs6faZvhNgEsqEpjRQKcNlT8ad+BNDmirw
                xAYNnApQDKCC/KPJq4PWdFAB04aCevCduBg73ODCZdK0evXqkxLUgV1xC6tArx87ImHlpDlugISd
                BLM7uMIZaLjL7NqGj5j7Wgn5HHJbWhjSkNnfY6IxgxTvKR4wtCH56UWCn6VGbUc2nFo+oCtuw+Bd
                VbL3HnEbi0qSS8fdfvwIx4xOsJ4nXwxtysrkaHL/bG0zeH15drd2qzel8eQbp2fYWNxgy44UE2H5
                GYGdf+HEVYgcOLcg8WXZBUk3cLfbui3aHomNfu4ujifBXaay5sPuadLnu1MYPvj0TtYbPvHtchxM
                MT3/fUZgr7zySsJQfeZve93jN+9KRsYOix1oag9cWY3gjfSuxEi6mC9FcRRa2k4OeBs2pxKYFB44
                lUj0qbcGhUR4t6qq6ugZgQGk58hLAoef+mOOHUsIbncS7Ouj7aYzLchqRIYfSsiQRiQ1grgTiCji
                jSUjWbvMKg7x6p+yO3+/tjyHooIEF4yODXQ4vPJu9vNtEWOCy3A/0SP3wKcIppWW3mzjvDV/Spgd
                h1x8sd+Dz6usfPxQZ5oksIPcWAtwaW96Epbw0NP5fH3IhWEKRQVxnrjnCL6UgZ0G4pbx5GX3Fl4h
                cKQ6uGluT23MAWlql7379386dnTBlG37PGNbIwa2I1i2MP3iCLnpSVcTkUym3FVIw4cNKGVAt7t9
                04A5JSHGFSZYNL2VG2cf71yz/YoYP664q6hAoMIl5oI9+/c39dTstF/8pTnem7LS9Eg8IQzKSgaM
                Lbu9XR7suPns+eWoHMLjvRCMfwYOdIMz4dLxEUYPH+BpRiSKGHcG7ihsVvQODHm4Mhj8qrfmpw22
                vKamNRpxlwzKtMMN7enMF/u7ZN6GgsOVqP6eePwLROcibEVOvOs6bRE+x5TiaXeOdgnyK0Herqqp
                fbGvLmf0qnbtxo17Z0yI+UcOsqMAOw+52deQ9CW1DGjxgiOApqEaQLmC9gvW0wRqRXh06V9yS8pv
                L3rQcZwXgN8WjBx1i4ho313PQtYvvWjkmjrj4zVbUga5XcotM0LcWhHC7VIkzQJv//fyvcgxDHkN
                H0+VLz6nSG3nWZQpIvJK1cbau/uDOmswAK0dk/l+rfnO72t8c7fv85CfY7OotI35M1rIzjmNDTd5
                dVAJsoxc87czri0aa6n1E1XmI9IE+lhNcNPLA1Z3tmCdgNWjZq380Pfqm+vShu+td7lESIwdFds+
                u7QtUXphOLewwEpDyEKxEW0GaUL5EtiKIR9jZq+bcXveuRbOfBydr2gxAAavpfgyHl2zZk3j6Yzn
                G/nXQHlp6WRH9EZBb1BlVPuDGlTkY1GaEFoEWhxRr6iMRBmpaBGQlzQeuwR5BxdvVVXVbTuTMXyj
                f4dQVSkvL5kgjnEJqhMdmCDKaBW8qHoR8Yhqm4rsENiByJeisq7rH1HOVP4XYtMbbBBUMS4AAAAl
                dEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMDdUMTk6NDg6NTQtMDc6MDBO/CU7AAAAJXRFWHRkYXRl
                Om1vZGlmeQAyMDE4LTA1LTA3VDE5OjQ4OjU0LTA3OjAwP6GdhwAAAABJRU5ErkJggg=="
              />
            </svg>
          </div>
        </div>
        <Link to={'/'} className={showLogoClassNames}>
          { showLogo ? <Logo /> : null }
        </Link>
      </div>
    );
  }
}
