<template>
  <div class="container">
      <div class="up-container">
          <figure class="image-container">
              <img class="profile-picture" src="https://efsane.s3.eu-central-1.amazonaws.com/profile-image-2.jpg">
              <figcaption class="profile-name">Arif Mehniyar</figcaption>
              <figcaption class="branches">
                  <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEzUlEQVRoge1YXW8bRRQ9d9frxknsxKYkhgQS54FCQRVRo9hOQnksqlB/AEJ8SaBKSE7TNqVN4mRoKqACpVQC8UJpQZQHxEMFRe0bD5VwxYdUECKiLQhI2xhK4jhRnPpjd3iwLDnxzuz6oxISPm+7586998zMzhwbqKOOOuqo4/8MKn549dLRC+DYKQr+7eICbl5eMeVUTeFtj7ge/Wj0xI+ygs+8Obzt75/WLutZg8z4zu0t6B7wihNwfDk1MPFk4VFZzyn7AGRFY7uCXjibVFNOzxp0e8H4VNY8AKz9o58VNe9sVHFfX4tseEYx+P7iF+sEsNDYzxx4TzRadSq4PyiencTc2pZnj408L+Kfe2Pfi0vX0wER3z3ohepURDQ48HZ0KPpL8buS6E05lQG4JUri39oMd5tTWCF5M32CMVaSl33FHIkbt4+Dc9OhHn8D7t7SJGwewF8NmuO1jS9LCh1+7HCCiCaEaQgIPO4DkekuwOqtjPtXR/Ldje+vXVw6mVrImHdIQM8OrzAnABCng4f6DiUtBQCAEcy+D9C3omQefwM2P9AoLLb4e+qlPTMjHYXnPTMjHYk/154Wxbc/6EZz+yZhPoC+N8LZj80YUwGMmME53wvAfL0BdA/6oGrmM5ZJ6crSov5Z4TmxYHyeSemmtVRNQVe4VdI8DIL+MiNmmJHiNQPAYtNnCPSUiJ/7Lok/YglTjlTCPb2tOx061+Z+SJ7jhvlcBIZ86Oj1yNo4NRWeeEFEij95ACD9FQCrIrqj1wNXi8OU4zrH6o3Uh4n51GlR865WDfduc8s6WOZqbkwWIBXAQuw6QK8LB6uE7iGfcHxyPu1fiWc2i/ieHT6QKtkEREdYP4vLepSvAABvwv0WgKsi/q6eRni7XFZpSuALWI675l10v2OVx1JAZFckzTk/KIsJDPmgKNLPaR1IJQQGJXYhHxWJ7IqkrXJZCgAANhA9S8AFEd/o0+CX7+V16Oz1wOXVhDwB56bC4+ft5LIlIJ+UW/ikVqFPKoazSUXndrnfMRRlvyygGLYFRMPRWU4ouWELyPsk6XkOAOgekPsdgB9nwbErdvuyLSCP3BQA4ang3yq/Ue34HU56id+RoSwBLMSWAT4pDJB5Ght+B4TRfA37KHMFAB7ST1r5JLNZbn+o2cLv4NJkcNzU78hQtgBGzCCDhiHzSRv2uepU0BWSHpsG5xgmImFOEcoWAACTg2MxAJ+I+I0njdUJxQmn2cDEN5X0UpEAAOBq7gAA4X4tnPU27ogVzSH5/WGBigWwfhYn4JiIz9+2PstbmgA23jc+X2kfFQsAAMOTk/okX8Bl5XeutiY8wrvFDqoSwB5mGRBGK89Aw3b8jjRDNYMLOBI7ep4DT5Q57Iup8MTuamtXtQIFWPkkE2S4ohyoRe2aCIiGo7MAWXr3AjjHTDl+R4aaCAAATlkGiU8qQhxKTvgrr1zUTAALsWUCRa3iiKhsvyNDzQQAgBHKfgBAfKMSj0WDY2dqWbOmAvI+SRH9n2Rwg/ZW4ndkqKkAIO+TOLjZLJ+q1O/IUHMBAABVH8V6n7Ts0Ky/j0pwRwSwfhYnQtFJw6vyOzLcmRUAYLhzMwCuAJj1a22274j/FFhsejf7erpci1FHHXWUgX8BcmVo3cljsxQAAAAASUVORK5CYII="/></span>
                  <span><img height="70" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEBElEQVRoge2Wb2hVdRjHP8/ZnZtjN3K0TcpI84WSguEMzV7sbEnG3NWVzGBRSf9WRklvIiukdAS9UkoyiVgIgTjD3L1s0ZCdW1lzsNBZQSyWrMEsjNm2mPfunvP04vzu3W64ed2Ugs7nzTnPn/M83+fc3+93LgQEBAQEBAQEBAQE/F+RK3pr7UcQjgAQdYSI3Qxsz9j/Iax/W8BcCeWWpr0gn99YKbMjtwGi8X3AvhsrZXZMDrDl/rtwvQcRLQUWZWVttg+gNAAQdUqot4tJSAOqDwGLgTDC95D3Cq0ne9lStRZP64E1wELQMMgAcJJRmnCcy5N9q9fjeY+D3gNSYrx/IvThervx9CL51quo1ADloMMgHaRoot0ZDAFCpHI/nvsiMs2mVikCXZCxk6xD9VB2DreBWwasRvUx4IXJoADcCqwjrGFgJ29i0VP5Hp63Y0rOlHpaSqhwDC95GmXJlFoLgEZC1FFTvdai1m4EecmvoAMgB4H4FQeZHGgc0cOobsbKWwHsN5Hl/0j0UHkC1YcRBo2ArQD0VD0HYsTTgVIP2mbsUZCteBO7wIgXPgDuBX3f5JQTcvdYiD5vHMMgFUQ7d6AcnHGA1s5TtMa3I9YIbmoTsMJE5mcnihLrPEwsfhzNiCs3oWeM/Suj1BBzjiEyYAZXok4XohGTc4mC0p1EnS4Ky14GLpkX+UAIZJmZsJtW5+KMwtPUVS/F9T4DXYnk+lmwEqCQ3nfKMhP4DsdJAeCRMispnVNucoZoaUkC0NKSJGIPATeDlljAZTN06fTNNVtlyn0NWAn0mSXyZI5TTK05bG4WZ1xCytzkG0/6hS4iEikCMNfbjX/QAj1lHlpNrf0GddVLES3LbiYF6a6+KXeaht2M6VEs6/drH4Az5rqKiP0hkaoG4G7jywcElZixwzDSTG1lBEaagWK/v/WphSuvA2NG0F5c72eQd7N7abG5+cs3tduM8yhhxlGNca1Y1h7Svz48DfoJYBs7ASie7gZ+8V2yDZFWkG1GUy8ThU0Wbc4Z3LwKkGbgPGgSGPdPJP3CJJu1qCN+rZveAn0b6AL6zDUGfGwG/AO0H+iffAdpn/q+E52nwboP9CjwA/A1cM5k+8urzblAsmANyF7gW9B+hK+AXSQK1tPePnL1HbhxYwnzEr8BIdAvicYrr/rMbKm1OxA2gPYSja/K5ZGZ/0rYdiHzEh9l8tQ6MWeRaSL2cZBziP4I6qJWFegGPyjRXMtMP8CzFfkMcQzYBIDqN8wvPTAn0dksBa3zjwUhfT4AZ5GJd3ItkjdtpGfIo+H8ES4s6UX0LIVljZmz+Hqw/I5bQBYCRcAE8BPoIRIFT9HmjF23PgEBAQEBAQEBAQEB0/E36DpmMEGvrmEAAAAASUVORK5CYII="/></span>
                  <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACpklEQVRoge2ZS0hUURjHf8d8Zy8kn2lmZWkYJWUIIkGLwKQWgQ/EjaQJEj0QKi3bFC6LgogIF2Zgj8VUPijUiCAYok2mkAYqNKJiKFY2Ezmnxa0OozM1k3rvovODy/3O+c7j+3Mu53VBo9ForET4csg+pJmB/A2R4T3WILMDWWy0AKvRAqxGC7AaLcBqtACr0QKsRguwmiUTIDLE7+f+E0/f2wEoqRHE5wlCMgWJewVlpwW97wPvx/QR6LbD7kJBSzuMTsD3WRgZh+bHkF0o6LYH1p6pAtxuOHJe4HQZ6bBQSE813gAzTqi9LJABnAVNFdAzAIMffnYcBK/uSfpaJf0dko1JcLwMOhslwudBdz7BSxOqd6amlR0aAls2GHZyPPQ8lESEB96mqSOQmqRspwuKTgmGR4z0vwQPJgtIioP9uSpt64KtBwQV9YKB4X9r0/RZqPGiZGe6SjtdcOsBpBcYQr58Daw90wUkxMCLZkltJURFqvzZWUNITolgctp3/blYshIvj4BLJyRDnZKGk5LYaOXr6YcL1/yfhpZEgNv9Z/+veT56NZypgHftkj3bld/W5X9fCxYwPAKHqgVtz1XeoMOzTESYsm8/guwiwecZlbdqBRTnq9Vr7KP//S9oHbjbAeV1ghknPH0pqCqCtBTJnVbPTyAl0XiX1BhbCICD1YKmBsm6OJj6BLYuVScx1iQBc2eTK00w975483rYtsmwc3ZIWtoN/zM7JO8TJMTAxCS4vqk6xfn+x7CgTygtBdpuSFZGefeHhsD1erU1OFYK56qUX0pwjHkGn7cL6o76vxlalOv10QlouCmwdYFjHNaugdwsOFspycqYX97+Bq42C173wpADIsMhMw1KCyTlhyF4mZdAfVyv6/8DVqMFaDQazf/ND8ttt3KFrySDAAAAAElFTkSuQmCC"/></span>
                  <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD8UlEQVRoge2YTWhcVRSAv3MnaSY/SqlSNEVTartppBZN8Ye2aYwTNUh3jQqCKEoWbqKWtO6yakmoNOBWFF0EaSsFu3CKiROjRUu7aaOpolQ0hEhpQQ1pJpP37nExVUnnzcx7uS9DC/NtZjj3/N775t1zBqpUqXJbI/G4UeHg6HaD6VLlMYEtQDPQCPjANYEZFc4ZOOklvx5nYMDGEdm9gP2j20xCRoDWsCaKnlYv8RLvdlx1DZ9wsh441WD8Nd8BD0QxE2SzEd2lqU0fMj6uLikYF+OahcZdwIaV2KrweE12Z5dLfHAsQOW/5Ges0VaLbQEmw9pbeMIlPrgWYPXO/DdJc/ipKQZTv6NyPLwDucMlPkCNq4M8+gzvjG4lJ/OI7ovHZzhiKoANxsoPsXmLgNMjdCvgtGd2qHMYGC6lY/rH+hCOltLRibo+dJlOFmQStYdlT+5kSf/h060oSdAdiHyqE8nXSimWPoGDmc1GdT/oTmAj+dagkgiqR3Us+YV0Zn8LUih6Aon+L/catRdAe8m3CZVO/l+aSNBbbDG4gLfHWlR0BGhYrazySLiGTvT5YkuBBZhafYtK7Ljqrzc+y8XapJnGe4IWgk9ApdspsXD8aa137EYa28pqG+/hQHGBpC+zlojd5QqYN8gLHHn6ip5pWg8aZsO2BAkLC0h624lt0FmGRWUa5X1recgbfPI0AL43DDSVtRZZFyQueI0mMPdGbNB/EuSQr94oQ6lZkFDmqhi+qjuC6ouholitDxIXFKCq6yIcwIi9vvgq73UvhjXQM03r8XJ7mDD9iD4S1g7Ra0HiggJEyWqI/BUyWm9eZrDb028amvH9A8Be4D5KTXreEvkNijqImdkgadBNHFjpTVhV+wYDnZ5matvwvTTIXREziobxLwSKbxb4Yn4u50uUswylLmmGJAlzYtWThwXql6aCFgrfQpev/gjMl/Kmwvd567oulJYYEixHWtpYClooLOB4j69wtozDfIHKRufUyuNh7aFii4E3saDHQrk2q96OeyC90rF0vngKAVj0E2Bm1dIqTRa4BPoRxrZJe/aDUsrB88Bg6i85MPa6wmdFdcozLO2Lb67QNjRFHwF/sPNzC50KGeD6aieyUpx6noBZNirOp3SrzsShqWQBM4i2grkfuBiX00oWkJbduSlpX5hG9ERcTt3+S1OZi9CUPauZNQ9Sm/gb3/b8b++GWwFivyVM65qnGSOT+Mvm+Gmn+Dg+QrI7NwUS7tYuZA5NnHKJD3H8Bhqzr4B+HNHqMshz0jH/h2v42GZfHa/dAWYfwqMILSh3A3Ugc6heQfgF9BwmkWZ24bz04McVu0qVKrcx/wCMzkVJG0VvSgAAAABJRU5ErkJggg=="/></span>
                  <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD4klEQVRoge2ZT2gUVxzHP292N0GjqdEEGo0Xe7KCB61eKthDKEoPJRbxoN68tyAUCu2xRw96klyDpW3AYKvYQoQILYgXT1pBrAdB2ahJzJ/9O++9HjbZzJvsvPdmd9Ji2S8s7Ps7v+983+/PzEAXXXTxTkPYBl+cYhlN379lTAKWd0+xPWkwsC7VFDM3Jz2sNlgJaJjN1pb0EA4b8o7FHSswPJJ+TbkEC3ON/1p0oAD/kQJK+dtgJ+Bgv1lQMtp4B30gqoDLBiuBwMF+sxAlEDhOgdWJsbAXfQP0XnnqtmZgwD3n+/1QfNxsyqx8wBYBdGUJtHYb54OVN0Yz6gM66MAHlI29DKFW9jHPDq2hNG9eN6KADDpQYM8Uc0A98drlRR8T7SgvgArX91SN3yrqI5PMt1q2Blci0y/hlYbdrS++CDvebzar3xxGzz4z56RMZPEcIMB6Tl2JDG2rh+IK9Hk4rAMxAs4o6CSAxQ/iR0hs2+mxnR1pIhD4ELDF4VL2BIws7KGAKw+gG+ew9VhMgcKFqxQuXDUnufLAzGW4/lWzaYTQLBQIbHchiyhUeWs002RhyNgH2kI5mUAmClgzYSmjPBCBTFGJQoc+EN4ZJ7wzbt8gngfOT8CRc+vtGIGoAtZKYBVOBWQ944p0a8yp40cookCvow4CDwX2LjL7cgBFC7K5D49TuDjVbMtHd6lfGrNvuIFAogJ6cJDXLvucCogZQmhdj+hls1v0D7q2sxKI5YA3Yjy5DluDTxSChLOol+eMttg5QnDwU0S+Z+PkXA8c+Az6h83+ynogSPMsvAbnEVpFEdgf79QrMQJb36Pnyx/RKwuoB7eQ96/DcAEOnYGDYxvvPhgKyJR1EHgSSIxE1RKEVcj3Gt2ibwe5Y2fJHTtrz8S1FZDrpySqgNB+CngdocBSkco/fkCX3iYNJ6O8APcnjC6jjPB8I+KtQNJYfeIiXPua4IMjBB99Tu7oKUT/UOvJpXl4eBMeTMJfv4OsGcOb5wOuu6Ek6sk91JN7hD992ySTPzoGvRoe3ko0OraN/zXTELBl41ZWNMn8/B3swXhktC5NWQeBJ4GcoKjaeQEhQ1DuadCogcJI1M/JDBUQgln7k2l7qNegWoFKpfHfgMpQAb1EMYvPHEpBrQqVcsNwZVOn6kfA+2gXv2CflIwiGAVOQPJXkyh2DTWMrVagbi8Mymj+1ILpQPHr8A0e+ezvTSCK56fZEig+DhSjGkaBw+3sA/yNYFpopvOS34Z+YSntBm0RiCOFOm3dZRsyIRDF89Nsydf5BDhJwEkAFLeB22GBmb2TZPA+sosuuvjf4B/mVKFnqGo6YQAAAABJRU5ErkJggg=="/></span>
                  <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAESUlEQVRoge1Zy4scRRz+qmd2XovLzm5WMPEB7mKyh5wSLyoYyYiPg0SQHOLR/AMBIbko3qJeglcJhKDgQfEiJj42RBCXXHIREgKBXLKRzGzceWzP9HZPVf08TLJTXTtdVTPTSQzMB3Poqu7q36++7/eoHmCCCSZ4osFMk97JSz6A6UdkSxJ8+cXhp5ImPcvD1ZSNGQVGG4wOMFAtXVuGByMYbciaJiVQNWrMxYClfcM/5LdAd//p2cDGYoA9HgYE79tAZhX8L2OAuOxfeGMwAJj199CgMABpVoFNQo8nC6kSsjBgDGLBRM2jwT6+NF/A6vFlqy3lctl6z8I3d1EP+7JhnIMe2CDGYAAy2fv6lrAa5gIC0IpkfEwq11mzCswOZJK9rwccREmz7mhFEkJfR42BrXAMBk4f3gDQHTTFJaEVjs9CI9Ksl7L366GLM2/VTc8bYwBgBFxaB7B70OziV39bDdQL2dJMFjeOPr193dTkE9t9oNazIRm2NAqkXAvmCvFXNsK4fSRiDlnfbXWAUu6H5vOaAxoDTGGAyN4JWB1gKTMwn493V7oDw9QAwBoDAIbohz6vPIvjBxZiY7Y6oEsIXEkMUo7PAIZgwNd30wHNrl4DlCB2YMBBQu4M+N3h02pLT6MKA8zSBwEpx8AoDDTChxwD3NAP6Th7dR1nr67HxvQ6cP5QGR8uFbevd2Yhsd0HceGlEAOSUs1CZS0LNSO9DigxMJVJIQuVpmoIpMQAZ5d3FfDnR/2O9FotwOvnbhiXK+cMdYBIbSMI90r3bObZGfjsDQ5gYD+yqdFfnLIvN6sVshgDUkDpEP/F1wcH9mEq3MSdcDLbjOJZZ1cpizcXZ5DL7Fw25zG8+1wBz5Tic2orTSK2nlP2cyhkAIFVGWjH6cWPJIgAdl/WM/kMvvtgEY0tgQs3m/jx+gZye/I4uljEkRcKKOd3OqZ2o0z0DzLkmP2cHEj6PiQkocMlpjXpzBYyOLZ/Dsf2zxkrcZsTulKRkFoDiNVcjhuuEkrcje+vbaA5wumsEUl8e7MTH1QzkCfTYwAGPX78622c/H0NL++exnt7Z/H+8iwWpqcG3lsPJX6+HeKHWwF+WwsRSS2FSrUPcusAHCWEqolOIQlX1nxcWfPxyeU7284cWS6DShIXDEbHoErIoQo7O9DrSN0OwKozn16+A7a0F9y1wxjie9ADOMWAoNG+D3FJ7sZzDtbtp32RSZMBT9RA437m1UAEikKwtg+0fVC0FSe5200vBsBFFRnXeDdAcCAIQO1NoOMDQpqE6eSA+7aeWnkxA69CRBUAbwNI/Nckhj3PA502WMcHhaHpzoDA/mKMViSjn3C6ct1l+dF0cWK1mM13XpWSVRhDhYADI60D3ALRCvPYipD5X/Dla5vDLpCOsN3ZGWmXTUg5MgGcWC1mcsEhAt5B7wcAFxlwUUTFP3DmlSD1d04wwQRPLv4DT7jzTbs1mf8AAAAASUVORK5CYII="/></span>
                  <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC8UlEQVRoge2YT0gUURzHv2/cSdl1W6PdEjcsyoJCLNBMTYoicBFNkqBLl4rQjirUIahLSEHszdKITkZ0KcGEtUNUqGWaHaItQROMDcM/qOvqSuu+LonYzNt132veXOZzm/m9+b7vd+bNvDcPsLCwsDATkqxBXVmghoA2UIoiEDhkmAJFBMAA0qi/raeyM1HThAHqygK3AXrtv5pLEQLa3NpXeZ1dZ1BXFqgBaIcxtlKDUKW69V3FC72awrwItME4S6lBSbyRVWMGoEChMXa4KGIVmAEAZBpghBcnq2ATUW3t9SVtQ+MUi+EYZqeiGAvO4dPrCQT7p0CpSM9rCAXYCEQhcLhUOFwqvHucKK/egdBIGO13vmAsOCusn2gIGYY3z4mme8UoPJktrGVKAACwqQou3ChA9i6xV82QIVR/NLDuOMNhw8HybTjXuB/2THWtc1XBibO5eHI3yN2XlCcQjcTQ3/0TT/1fNbUDxW4hbalD6HPvpOZcljtdSFNqgM06ZqNLK0Ka0gLYVAW1V/Zpzv8aj4jpCl3NoOL87nXHzi2bkF/qQfZO7Wq8rysk1JchAc7o3Gk9hj9Ooz8gFsC0eeBz7yRarg5hJSa2pjAtQH6pGxdvFiDLkyGkY1oAohAcOrYdTS3FyLDzj2QpMzEAuLam44gvB6cv74VNXbtvHq8dx2tz0d3+nasvaU9gbnoZLx+PofPhiKZWdIp/USd9CL3X+ep4cuzcetIDEKKzj5B0c4eN9AAlvhzNubmpZW49w//IVnG501Hi86LqUp6mNjw0w61rSICN/CuvEo9TvHk2zt2XafPAKl2PRhAaDXNfL20I/cvSQgzP7w/jbccPIR0pASgFFsO/MT+zjNBoGN8GpjH4agLRSExYWyiA3owrm0TvwII0F8mZZxXYASgGDbHCB9MLO0Aa9RtihQMKwvTCDNDWU9lJQJuNsZQStx70+bpYxaSrkPrS7qq/+/OHIW/HegHABwriT2TewsLCwnz+AA/Twv7KzxMPAAAAAElFTkSuQmCC"/></span>
                  <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAER0lEQVRoge2ZW2hUVxSGP5Mm1kvEWG81UaFWaJsHCWJBKVgLNYjxwQvE0ostraAWsV4eKgpCQatUyYOSYiD4FsUWxAdv2Ea8tlIvYDVNKNZYNUWsrWKiVSGnDyvHmXOy1z77zJyZgOSH9TT/3utfM3uvyx7oQx+eG7wGXAKaeltINhgLtAMecLmXtVgxEvgJOKJ8fhQJwgOW5EtUXIxCvmUP+NXw+dukgvCAifmT5o4hiHhf5KcGTgPBQAbmTV03RgCngcMWzn5SAm8AxQZOK8FASpOVaccwJMN4wDmFM5egwK0KrzPEm5qoUgteIHg531V4lwkKnKnwHoR4G5IUa8OGNKetCmcaQXFd6Gf/9xD3D6AoQb1GVAJP05zWKbxNIXH3LXs2hrgesDwhvSqOhRwuVHjHQ7w2y54L6RnIQ+RLywnmGBxOUbh/hnidQIHCLQauGva+C0x31DYEOI8U3UgcNDgbr3D/M3BfsexdY+D7d2sn8LJl7WjgZDf/UlQQLwFPDI5KFH44pXrAsggfu5RgvG7fh4CNwMdAFfARckfvkwp6RlQgHyoOhin82wbuxQgfxcAPlmCibHtUEAC1yuJyhX9K4VdF+OkPfJtBEN/hmLKblA3eUPg7FP5vjg7nAVccAugE1qInkh5oUzaqVvjVFucbHX0WAAuAPcglvofclVtIGfgSGQ9i4W9F1BcKfwCSPrVMtCCugKRgSqceUG9Zs0VZ4x+J2QlrLEEKsa0b56EiSOu1QAaqe8o6P6V+kJ32ZygkNTK02Ii3LILKLOtWWtb5Vodej1wwiODcox13oGdLnm6fWdYVAb9Y1vp2E1iMefCy4R3kF/D3aUPup4p9FhFnIpxNwFwgTfYX8A3wlkXQSOB94ERobRfSD1rxVYSAioj1lcC/jsH49hRoBn4EDiD9lKm59G1bVBAgBcrmdI/DHpWk3q6Stt04VvahBAcqk7m03GWkOtWkrB7JWs4In8mwXcHtKacQWEWqa83U/gE+iROAj6UOmzcC/Rz3GwF8jd4BaHYXKbbDMwkCYDD2Aufblpj7vojcwXrk2N1M89MJXEea1lpgFtIhZ42tBuEm25SEs1xiOO5ptIH4BS5TlCIz0KE4iz7H/TyfxT6rJ4GByNOtR8y/JArQBy2TPQBWIC+USWMc8mX5vmribjAGaSfiZJsW5A0rVs5XUAgsIjgnnSLGpJiOacAj4gXjAdeA9WR25IYitSM8BncAr5oWuNaCOcD3ZH6pW4ALyH8ozcAdJJk8RtJsCfJ2NgmYjHS74fTbBbwH7M1QwzPMxvyOlS9bk20A6XgTKWT5DKALWJdkED5GIfNyPoLoAObnIggf/ZCJUXt1ScIuIncmLygFNtPz36hsrB353yQX9SgSpcBq3F4NtXtwAkm51llcg2v6jYMK5O33dSTnlyOv/IO6P+9AjmQb8rT6MzLm3smBlj70IVv8D2bVA+VShw1QAAAAAElFTkSuQmCC"/></span>
              </figcaption>
              <figcaption class="title-branches">
                  <span>Vue Developer</span>,
                  <span>Django Developer</span>,
                  <span>Frontend Developer</span>,
                  <span>Full Stack  Developer</span>
              </figcaption>
          </figure>
      </div>
      <div class="scroll-down" @click="scrollDown" ></div>
      <div class="resume">
          <p class="description-paragraph first">
              <span><img height="40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEzUlEQVRoge1YXW8bRRQ9d9frxknsxKYkhgQS54FCQRVRo9hOQnksqlB/AEJ8SaBKSE7TNqVN4mRoKqACpVQC8UJpQZQHxEMFRe0bD5VwxYdUECKiLQhI2xhK4jhRnPpjd3iwLDnxzuz6oxISPm+7586998zMzhwbqKOOOuqo4/8MKn549dLRC+DYKQr+7eICbl5eMeVUTeFtj7ge/Wj0xI+ygs+8Obzt75/WLutZg8z4zu0t6B7wihNwfDk1MPFk4VFZzyn7AGRFY7uCXjibVFNOzxp0e8H4VNY8AKz9o58VNe9sVHFfX4tseEYx+P7iF+sEsNDYzxx4TzRadSq4PyiencTc2pZnj408L+Kfe2Pfi0vX0wER3z3ohepURDQ48HZ0KPpL8buS6E05lQG4JUri39oMd5tTWCF5M32CMVaSl33FHIkbt4+Dc9OhHn8D7t7SJGwewF8NmuO1jS9LCh1+7HCCiCaEaQgIPO4DkekuwOqtjPtXR/Ldje+vXVw6mVrImHdIQM8OrzAnABCng4f6DiUtBQCAEcy+D9C3omQefwM2P9AoLLb4e+qlPTMjHYXnPTMjHYk/154Wxbc/6EZz+yZhPoC+N8LZj80YUwGMmME53wvAfL0BdA/6oGrmM5ZJ6crSov5Z4TmxYHyeSemmtVRNQVe4VdI8DIL+MiNmmJHiNQPAYtNnCPSUiJ/7Lok/YglTjlTCPb2tOx061+Z+SJ7jhvlcBIZ86Oj1yNo4NRWeeEFEij95ACD9FQCrIrqj1wNXi8OU4zrH6o3Uh4n51GlR865WDfduc8s6WOZqbkwWIBXAQuw6QK8LB6uE7iGfcHxyPu1fiWc2i/ieHT6QKtkEREdYP4vLepSvAABvwv0WgKsi/q6eRni7XFZpSuALWI675l10v2OVx1JAZFckzTk/KIsJDPmgKNLPaR1IJQQGJXYhHxWJ7IqkrXJZCgAANhA9S8AFEd/o0+CX7+V16Oz1wOXVhDwB56bC4+ft5LIlIJ+UW/ikVqFPKoazSUXndrnfMRRlvyygGLYFRMPRWU4ouWELyPsk6XkOAOgekPsdgB9nwbErdvuyLSCP3BQA4ang3yq/Ue34HU56id+RoSwBLMSWAT4pDJB5Ght+B4TRfA37KHMFAB7ST1r5JLNZbn+o2cLv4NJkcNzU78hQtgBGzCCDhiHzSRv2uepU0BWSHpsG5xgmImFOEcoWAACTg2MxAJ+I+I0njdUJxQmn2cDEN5X0UpEAAOBq7gAA4X4tnPU27ogVzSH5/WGBigWwfhYn4JiIz9+2PstbmgA23jc+X2kfFQsAAMOTk/okX8Bl5XeutiY8wrvFDqoSwB5mGRBGK89Aw3b8jjRDNYMLOBI7ep4DT5Q57Iup8MTuamtXtQIFWPkkE2S4ohyoRe2aCIiGo7MAWXr3AjjHTDl+R4aaCAAATlkGiU8qQhxKTvgrr1zUTAALsWUCRa3iiKhsvyNDzQQAgBHKfgBAfKMSj0WDY2dqWbOmAvI+SRH9n2Rwg/ZW4ndkqKkAIO+TOLjZLJ+q1O/IUHMBAABVH8V6n7Ts0Ky/j0pwRwSwfhYnQtFJw6vyOzLcmRUAYLhzMwCuAJj1a22274j/FFhsejf7erpci1FHHXWUgX8BcmVo3cljsxQAAAAASUVORK5CYII="/></span>
              I love Vue. I really enjoy create new vue components and  <a target="_blank" href="https://www.npmjs.com/~mehniyarif">publish on NPM.</a> The HTML 5 Elements come us with some lacks, I uses some css styles and magic javascript lines, ta daa! these lacks convert to tremendous vue components.
              I mostly using <b>slots</b> , <b>emits</b>, <b>props</b>, <b>reactivity</b>, <b>filters</b>, <b>directives</b> while writing Vue

          </p>
          <p class="description-paragraph">
              I Usually add Vuex while creating projects. After creating a method in actions vuex offer us and pulling my data, I first write it to the state with the help mutations. Then I use it with the help of getters methods. By the way I'm using Axios package to fetch the data
          </p>
          <p class="description-paragraph">
              I create my own css codes as much as possible and use the sass framework for this. It can be easily used with the help of sass pre-processors. Apart from these, the main features I use in Vue are <b>Router</b>, <b>Class Based Services</b> , <b>ES6 Features</b>, <b>PWA</b>, <b>MVC standards</b> and etc.
          </p>

          <p class="description-paragraph next">
              <span><img height="40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEBElEQVRoge2Wb2hVdRjHP8/ZnZtjN3K0TcpI84WSguEMzV7sbEnG3NWVzGBRSf9WRklvIiukdAS9UkoyiVgIgTjD3L1s0ZCdW1lzsNBZQSyWrMEsjNm2mPfunvP04vzu3W64ed2Ugs7nzTnPn/M83+fc3+93LgQEBAQEBAQEBAQE/F+RK3pr7UcQjgAQdYSI3Qxsz9j/Iax/W8BcCeWWpr0gn99YKbMjtwGi8X3AvhsrZXZMDrDl/rtwvQcRLQUWZWVttg+gNAAQdUqot4tJSAOqDwGLgTDC95D3Cq0ne9lStRZP64E1wELQMMgAcJJRmnCcy5N9q9fjeY+D3gNSYrx/IvThervx9CL51quo1ADloMMgHaRoot0ZDAFCpHI/nvsiMs2mVikCXZCxk6xD9VB2DreBWwasRvUx4IXJoADcCqwjrGFgJ29i0VP5Hp63Y0rOlHpaSqhwDC95GmXJlFoLgEZC1FFTvdai1m4EecmvoAMgB4H4FQeZHGgc0cOobsbKWwHsN5Hl/0j0UHkC1YcRBo2ArQD0VD0HYsTTgVIP2mbsUZCteBO7wIgXPgDuBX3f5JQTcvdYiD5vHMMgFUQ7d6AcnHGA1s5TtMa3I9YIbmoTsMJE5mcnihLrPEwsfhzNiCs3oWeM/Suj1BBzjiEyYAZXok4XohGTc4mC0p1EnS4Ky14GLpkX+UAIZJmZsJtW5+KMwtPUVS/F9T4DXYnk+lmwEqCQ3nfKMhP4DsdJAeCRMispnVNucoZoaUkC0NKSJGIPATeDlljAZTN06fTNNVtlyn0NWAn0mSXyZI5TTK05bG4WZ1xCytzkG0/6hS4iEikCMNfbjX/QAj1lHlpNrf0GddVLES3LbiYF6a6+KXeaht2M6VEs6/drH4Az5rqKiP0hkaoG4G7jywcElZixwzDSTG1lBEaagWK/v/WphSuvA2NG0F5c72eQd7N7abG5+cs3tduM8yhhxlGNca1Y1h7Svz48DfoJYBs7ASie7gZ+8V2yDZFWkG1GUy8ThU0Wbc4Z3LwKkGbgPGgSGPdPJP3CJJu1qCN+rZveAn0b6AL6zDUGfGwG/AO0H+iffAdpn/q+E52nwboP9CjwA/A1cM5k+8urzblAsmANyF7gW9B+hK+AXSQK1tPePnL1HbhxYwnzEr8BIdAvicYrr/rMbKm1OxA2gPYSja/K5ZGZ/0rYdiHzEh9l8tQ6MWeRaSL2cZBziP4I6qJWFegGPyjRXMtMP8CzFfkMcQzYBIDqN8wvPTAn0dksBa3zjwUhfT4AZ5GJd3ItkjdtpGfIo+H8ES4s6UX0LIVljZmz+Hqw/I5bQBYCRcAE8BPoIRIFT9HmjF23PgEBAQEBAQEBAQEB0/E36DpmMEGvrmEAAAAASUVORK5CYII="/></span>
              I handle the api works of both my professional life and my own projects with django and usually use it with <b>rest framework</b> , <b>postgres</b>  and <b>redis</b>. I have a history of 2 years in total. I'm using and serving the django project with <b>docker</b>.
          </p>
          <p class="description-paragraph">
              When necessary, I can connect to linux machine and write django queries to handle database operations. In addition to these I have used django and <b>django-rq</b>, <b>signals</b>, <b>exceptions</b>, <b>types</b>, <b>crons</b>, <b>views</b>, <b>serializers</b>, <b>urls</b>, <b>admin areas</b>, <b>models</b> a lot.
          </p>
      </div>
      <div class="down-container">
          <social-media></social-media>
      </div>
  </div>
</template>

<script>
import SocialMedia from "@/components/social-media";
export default {
    name: 'HomeView',
    components: {SocialMedia},

    methods:{
        scrollDown(){
            let currentElement = document.querySelector(".resume")
            currentElement.scrollIntoView({
                behavior:'smooth'
            })
        }
    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,200&display=swap');
.container{
  display: block;
  margin-bottom: 50px;
}
.up-container{
  height: 100vh;
}
.image-container{
  font-family: 'Open Sans', sans-serif;
  display: block;
  text-align: center;
  max-width: 20em;
  margin: auto;
}
.profile-name{
  font-size: 2em;
  text-align: center;
}
.profile-picture{
    border-radius: 50%;
    text-align: center;
    height: 17em;
    width: 17em;
    margin: 2px;
    border: .2em solid #F7F9F9;


  @media (min-width:768px){
    height: 20em;
    width: 20em;
    margin: 10px;
  }

    &:hover{
      transform: translate(1px, 1px);
      box-shadow: 1em 2em 4em rgba(0,0,0,.1);
     }
}
.branches{
  margin: auto;
  img{
    height: 2.5em;
    cursor: pointer;
  }
}
.title-branches{
  text-align: center;
  padding-top: 10px;
  height: 1.8em;
}
.resume{
  margin-top: 100px;
}
.description-paragraph{
  font-family: 'Nunito', sans-serif;
  margin-inline: 10%;
  font-size: 1.1em;
  font-weight: 500;
  span{
    margin-right: 20px;
  }
  &.next{
    margin-top: 40px;
  }
}

.scroll-down {
  position: absolute;
  left: 50%;
  bottom: 100px;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 0;
  text-decoration: none;
  width: 13px;
  height: 13px;
  cursor: pointer;
  border-bottom: 2px solid #2B5388;
  border-right: 2px solid #2B5388;
  -webkit-transform: translate(-50%, 0) rotate(45deg);
  animation: fade_move_down 3s cubic-bezier(0.19, 1, 0.22, 1) infinite;
}
@keyframes fade_move_down {
  0% {
    transform: translate(0, -20px) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 20px) rotate(45deg);
    opacity: 0;
  }
}
.down-container{
  display: flex;
  justify-content: center;
}
</style>
