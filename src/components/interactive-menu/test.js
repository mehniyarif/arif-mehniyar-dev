var bekleme,
  yensesm = 0,
  timeOuts = Array(),
  lastPage = 3,
  currentPage = 1,
  totalPages = 0,
  pageChange = !1,
  paused = !1,
  courseCompleted = !1,
  quizScore = 0,
  questionCount = 0,
  lastPageFromScorm = 0,
  aramaJsonData,
  searchArray = "",
  learner = new Object(),
  ekranlar,
  volumeLevel = 0,
  isSoundEnabled = !1,
  pageArray = Array(),
  questionData = Array(),
  moduleInfo = new Object(),
  ekranBasliklar,
  quizMinute = 0,
  quizTimer,
  isQuizEnd = !1,
  startStopScreenControl = !1,
  navigationLocked = !1,
  isSearch = !0,
  lastPageUrl = "",
  statement = "",
  offline = !1,
  isPageEnd = !1,
  tincan_line = "",
  Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      var t,
        n,
        a,
        o,
        r,
        i,
        l,
        c = "",
        s = 0;
      for (e = Base64._utf8_encode(e); s < e.length; )
        (o = (t = e.charCodeAt(s++)) >> 2),
          (r = ((3 & t) << 4) | ((n = e.charCodeAt(s++)) >> 4)),
          (i = ((15 & n) << 2) | ((a = e.charCodeAt(s++)) >> 6)),
          (l = 63 & a),
          isNaN(n) ? (i = l = 64) : isNaN(a) && (l = 64),
          (c =
            c +
            this._keyStr.charAt(o) +
            this._keyStr.charAt(r) +
            this._keyStr.charAt(i) +
            this._keyStr.charAt(l));
      return c;
    },
    decode: function (e) {
      var t,
        n,
        a,
        o,
        r,
        i,
        l = "",
        c = 0;
      for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length; )
        (t =
          (this._keyStr.indexOf(e.charAt(c++)) << 2) |
          ((o = this._keyStr.indexOf(e.charAt(c++))) >> 4)),
          (n =
            ((15 & o) << 4) | ((r = this._keyStr.indexOf(e.charAt(c++))) >> 2)),
          (a = ((3 & r) << 6) | (i = this._keyStr.indexOf(e.charAt(c++)))),
          (l += String.fromCharCode(t)),
          64 != r && (l += String.fromCharCode(n)),
          64 != i && (l += String.fromCharCode(a));
      return (l = Base64._utf8_decode(l));
    },
    _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      for (var t = "", n = 0; n < e.length; n++) {
        var a = e.charCodeAt(n);
        a < 128
          ? (t += String.fromCharCode(a))
          : (127 < a && a < 2048
              ? (t += String.fromCharCode((a >> 6) | 192))
              : ((t += String.fromCharCode((a >> 12) | 224)),
                (t += String.fromCharCode(((a >> 6) & 63) | 128))),
            (t += String.fromCharCode((63 & a) | 128)));
      }
      return t;
    },
    _utf8_decode: function (e) {
      for (var t = "", n = 0, a = (c1 = c2 = 0); n < e.length; )
        (a = e.charCodeAt(n)) < 128
          ? ((t += String.fromCharCode(a)), n++)
          : 191 < a && a < 224
          ? ((c2 = e.charCodeAt(n + 1)),
            (t += String.fromCharCode(((31 & a) << 6) | (63 & c2))),
            (n += 2))
          : ((c2 = e.charCodeAt(n + 1)),
            (c3 = e.charCodeAt(n + 2)),
            (t += String.fromCharCode(
              ((15 & a) << 12) | ((63 & c2) << 6) | (63 & c3)
            )),
            (n += 3));
      return t;
    },
  };
void 0 !== localStorage.volumeLevel && (volumeLevel = localStorage.volumeLevel);
var buttonList = new Array(
  { id: "mute_button", icon: "content/images/icons/mute.png" },
  { id: "next_button", icon: "content/images/icons/next.png" },
  { id: "prev_button", icon: "content/images/icons/prev.png" },
  { id: "note_button", icon: "content/images/icons/note.png" },
  { id: "help_button", icon: "content/images/icons/help.png" },
  { id: "go_button", icon: "" },
  { id: "pause_button", icon: "content/images/icons/pause.png" },
  { id: "print_button", icon: "content/images/icons/print.png" },
  { id: "screen_text_button", icon: "content/images/icons/stext.png" },
  { id: "replay_button", icon: "content/images/icons/replay.png" },
  { id: "full_screen", icon: "content/images/icons/fullscreen.png" },
  { id: "link_button", icon: "content/images/icons/link.png" },
  { id: "toc_button", icon: "content/images/icons/toc.png" },
  { id: "quiz_button", icon: "content/images/icons/quiz.png" },
  { id: "progress_bar", icon: "" }
);
function init_page() {
  showPage(), $("#progressCol #totalPages").text(totalPages);
}
function pageController(e) {
  return !!(e < 4 || e < lastPage || (e <= lastPage && isPageEnd));
}
function callURL(e, t) {
  if (!1 === navigationLocked)
    if ("link" === t) {
      for (var n = 0, a = 0; a < ekranlar.length; a++)
        if (
          ekranlar[a].url === e &&
          ((n = ekranlar[a].no - 1), -1 === pageArray.indexOf(n))
        ) {
          pageArray.push(n), setComplationRate();
          break;
        }
      if (pageController(n)) {
        lastPageFromScorm + 1 < n && !0 === tocControl
          ? gecsdurdur()
          : (stopAllSound(),
            save_location_to_lms((currentPage = n)),
            CustumParseInt(currentPage) == CustumParseInt(lastPage) &&
              ((isPageEnd = !1), setStatus("lastPage", ++lastPage)),
            $("#progressCol #currentPage").text(++n),
            $("#course_screen").attr("src", e),
            playSound("invalid"));
        for (a = 0; a < ekranBasliklar.length; a++)
          if (parseInt(ekranBasliklar[a].no) === currentPage + 1) {
            $("#ekranTitle").html(
              "<i></i>" +
                ekranBasliklar[a].ust +
                " - <span>" +
                ekranBasliklar[a].label +
                "</span>"
            ),
              743 < $("#ekranTitle.sceneTitle").width()
                ? $("#ekranTitle").html(
                    '<i></i><marquee scrollamount="2" behavior="alternate" direction="left" width="743">' +
                      ekranBasliklar[a].ust +
                      " - <span>" +
                      ekranBasliklar[a].label +
                      "</span></marquee>"
                  )
                : $("#ekranTitle").html(
                    "<i></i>" +
                      ekranBasliklar[a].ust +
                      " - <span>" +
                      ekranBasliklar[a].label +
                      "</span>"
                  );
            break;
          }
        var o = document.getElementById(e);
        "deactive" === o.className && (o.className = "active"),
          "" != lastPageUrl &&
            ((document
              .getElementById(e)
              .getElementsByTagName("a")[0].style.color =
              $(".navTitle").css("background-color")),
            e != lastPageUrl &&
              (document
                .getElementById(lastPageUrl)
                .getElementsByTagName("a")[0].style.color = "")),
          (lastPageUrl = e),
          clearImlec();
      } else gecsdurdur();
    } else if (
      ((e = CustumParseInt(e)), lastPageFromScorm + 1 < e && !0 === tocControl)
    )
      gecsdurdur();
    else if (0 <= e && e < totalPages) {
      var r = "content/html/" + e + ".html";
      $("#course_screen").attr("src", r),
        $("#progressCol #currentPage").text(e);
    } else gecsdurdur2();
  setScreenText();
}
function gecsdurdur() {
  $(window).blur();
  confirm("Bu sayfaya geçişiniz engellenmiştir!");
  $(window).focus();
}
function gecsdurdur2() {
  $(window).blur();
  confirm("Eğitimin sonuna gelinmiştir!");
  $(window).focus();
}
function muteSound(e) {
  e
    ? $(this).stopSound($("#background-ses"))
    : $("#background-ses").get(0).play();
}
function nextPage() {
  var e = currentPage + 1;
  e < totalPages && callURL(ekranlar[e].url, "link"),
    currentPage == totalPages - 1 && show_controll();
}
function prevPage() {
  var e = currentPage - 1;
  0 <= e && e < totalPages && callURL(ekranlar[e].url, "link"),
    e == totalPages - 1 && show_controll();
}
function showPage() {
  var e = getStatus("location");
  e
    ? (course_status() &&
        (showLog("Kursu tamamladınız. Devam etmenize gerek yok."),
        (courseCompleted = !0)),
      (currentPage = CustumParseInt(e, 10)),
      (quizScore = quiz_score()),
      currentPage < 0 && (currentPage = 0),
      (lastPageFromScorm = currentPage),
      setLearnerDetails())
    : showLog("Error: Course could not connect with the LMS"),
    ($.cookie.json = !0);
  moduleInfo.no, learner.id;
  var t = getStatus("lastPage");
  if ((t && (lastPage = CustumParseInt(t, 10)), 0 < lastPage))
    for (var n = 0; n < ekranlar.length; n++)
      ekranlar[n].no <= CustumParseInt(lastPage) &&
        pageArray.push(ekranlar[n].no);
  1 < pageArray.length && setPageStatus(),
    1 != currentPage
      ? lockCallPage(!0)
      : (callURL("content/html/1.html", "link"), showImlec()),
    setComplationRate();
}
function show_controll() {
  if (currentPage == totalPages - 1) {
    setStatus("completed", !0);
  }
}
function save_location_to_lms(e) {
  showLog(setStatus("location", e));
}
function course_status() {
  var e = !1;
  return getStatus("completed") && (e = !0), e;
}
function save_score_to_lms(e) {
  1 != courseCompleted && setStatus("score", e.toString()), showLog("");
}
function setLearnerDetails() {
  learner.name = offline
    ? ((learner.id = localStorage.getItem("username")),
      localStorage.getItem("adi"))
    : ((learner.id = tincan.registration), tincan.actor.name);
}
function setStatus(e, t) {
  offline
    ? localStorage.setItem(Base64.encode(package.CourseActivity.id) + e, t)
    : tincan.setState(e, t, function () {});
}
function getStatus(e) {
  if (offline) {
    if (
      void 0 !==
      localStorage.getItem(Base64.encode(package.CourseActivity.id) + e)
    )
      return localStorage.getItem(Base64.encode(package.CourseActivity.id) + e);
  } else {
    var t = tincan.getState(e);
    if (
      void 0 !== t &&
      null === t.err &&
      null !== t.state &&
      "" !== t.state.contents
    )
      return t.state.contents;
  }
  return !1;
}
function end_course() {
  tincan.sendStatement({ verb: "suspend", context: package.getContext() }),
    showLog("LMS e kaydedildi:");
}
function quiz_score() {
  return CustumParseInt(10);
}
function showLog(e) {}
function gotoLastLocation() {
  callURL(currentPage);
}
function printPageText() {
  var e = $("#screenTextContent").html(),
    t = window.open(
      "",
      "",
      "letf=0,top=0,width=" +
        $(window).width() +
        ",height=" +
        $(window).height() +
        ",toolbar=0,scrollbars=0,status=0"
    );
  t.document.write(e), t.document.close(), t.focus(), t.print(), t.close();
}
function printPage() {
  $("#course_screen")[0].contentWindow.focus(),
    $("#course_screen")[0].contentWindow.printScreen();
}
function lookup(e) {
  if (0 === e.length);
  else if (3 <= e.length) {
    $("#searchResultPanel").html("");
    new Array();
    for (
      var t,
        n =
          '<div class="tits"><span>' + e + "</span>  Kelimesi Sonuçları</div>",
        a = !1,
        o = 0,
        r = 0;
      r < aramaJsonData.length;
      r++
    ) {
      0 <=
        (o = (t = (t = (t = aramaJsonData[r].data.replace(
          new RegExp("\n", "g"),
          " "
        )).replace(new RegExp("\t", "g"), " ")).replace(
          new RegExp("•", "g"),
          " "
        ))
          .toLowerCase()
          .indexOf(e.toLowerCase())) &&
        ((n +=
          '<li style="cursor:pointer;" onclick="callURL(\'' +
          ekranlar[r].url +
          "','link')\"><span>Ekran " +
          ++aramaJsonData[r].no +
          " :</span> ...<span>" +
          t.substr(o, e.length) +
          "</span>" +
          t.substr(o + e.length, 40) +
          "....</li>"),
        (a = !0));
    }
    a || (n += "Sonuç bulunamadı"),
      (n += "</p>"),
      $("#searchResultPanel").html(n),
      !0 === isSearch &&
        ($("#searchBtn").removeClass("searchButton"),
        $("#searchBtn").addClass("trashBar"),
        (isSearch = !1));
  }
}
function downloadDoc() {
  window.open("content/docs/kitap.pdf", "_blank");
}
function fullScreenMode() {
  var e = document.getElementById("player_body");
  screenfull.toggle(e);
}
function gotoPage() {
  if (!1 === navigationLocked) {
    var e = $("#pageNumberField").val();
    (currentPage = --e), setScreenText(), callURL(ekranlar[e].url, "link");
  }
}
function startStopScreen() {
  !0 === startStopScreenControl
    ? ((startStopScreenControl = !1),
      $("#course_screen")[0].contentWindow.vcPlay())
    : ((startStopScreenControl = !0),
      $("#course_screen")[0].contentWindow.vcStop());
}
function repeatScreen() {
  callURL(ekranlar[currentPage].url, "link");
}
function gotoMain() {
  callURL("content/html/1.html", "link");
}
function setScreenText() {
  var e = aramaJsonData[(lastPageFromScorm = currentPage)].data.replace(
    new RegExp("\n", "g"),
    "<br/>"
  );
  $("#screenTextContent").html(e);
}
function setComplationRate() {
  var e = pageArray.length,
    t = 0;
  lastPageFromScorm < currentPage && (e = pageArray.length),
    100 < (t = Math.ceil((e / totalPages) * 100)) && (t = 100),
    setStatus("completaion", t),
    $("#completionPieDiv").removeClass(),
    0 <= t && t < 25
      ? ($("#completionPieDiv").addClass("completionPie pie0"),
        $("#completaion").text("%0"))
      : 25 <= t && t < 50
      ? ($("#completionPieDiv").addClass("completionPie pie1"),
        $("#completaion").text("%25"))
      : 50 <= t &&
        t < 75 &&
        ($("#completionPieDiv").addClass("completionPie pie2"),
        $("#completaion").text("%50")),
    75 <= t &&
      t < 100 &&
      ($("#completionPieDiv").addClass("completionPie pie3"),
      $("#completaion").text("%75")),
    100 <= t &&
      ($("#completionPieDiv").addClass("completionPie pie4"),
      $("#completaion").text("%100")),
    !0 === isNaN(quizScore)
      ? $("#quizPoint").text("0")
      : $("#quizPoint").text(quizScore.toString());
  var n = moduleInfo.no + learner.id;
  $.cookie.json = !0;
  var a = JSON.stringify(pageArray);
  $.cookie(n, a, 365);
}
function showHelp() {
  $("#course_screen").attr("src", "content/html/help.html");
}
function set_volumeLevel(e) {
  (volumeLevel = e), localStorage.setItem("volumeLevel", e);
}
function quizStart() {
  (isSoundEnabled = !0),
    0 === volumeLevel
      ? (set_volumeLevel(1),
        ($("#playerAudioObject").get(0).volume = 1),
        $("#volumeRange").slider({ value: 100 * volumeLevel }))
      : set_volumeLevel(($("#playerAudioObject").get(0).volume = volumeLevel));
}
function quizEnd() {
  !(isQuizEnd = !0) === courseCompleted && show_controll();
}
function calculateQuizPoint() {
  if (!0 === courseCompleted) {
    save_score_to_lms(quizScore);
    var e = moduleInfo.no + learner.id + "quiz";
    $.cookie.json = !0;
    var t = JSON.stringify(questionData);
    $.cookie(e, t, 365);
  } else {
    for (
      var n = 100 / CustumParseInt(questionCount), a = 0, o = 0;
      o < questionData.length;
      o++
    )
      !0 === questionData[o].answ && a++;
    save_score_to_lms((quizScore = a * n));
    e = moduleInfo.no + learner.id + "quiz";
    $.cookie.json = !0;
    t = JSON.stringify(questionData);
    $.cookie(e, t, 365);
  }
  setComplationRate();
}
function playSound(e) {
  "invalid" == e
    ? ((yensesm = 0),
      (surebekle = 3e3),
      window.clearTimeout(bekleme),
      (bekleme = window.setTimeout(bekletmean, surebekle)))
    : (($("#playerAudioObject").get(0).src = e),
      (yensesm = 1),
      ($("#playerAudioObject").get(0).volume = volumeLevel),
      $("#volumeRange").slider({ value: 100 * volumeLevel }),
      $("#playerAudioObject").get(0).play(),
      (isSoundEnabled = !0));
}
function myOnLoadedData() {
  1 == yensesm &&
    ((surebekle = parseInt(
      1e3 * document.getElementById("playerAudioObject").duration
    )),
    window.clearTimeout(bekleme),
    (bekleme = window.setTimeout(bekletmean, surebekle)));
}
function bekletmean() {
  callNextPage(!0), window.clearTimeout(bekleme);
}
function volumeStatusSet(e) {
  set_volumeLevel(e), ($("#playerAudioObject").get(0).volume = volumeLevel);
}
function pausePlaySound(e) {
  ($("#playerAudioObject").get(0).volume = volumeLevel),
    "play" == e
      ? $("#playerAudioObject").get(0).play()
      : "pause" == e && $("#playerAudioObject").get(0).pause();
}
function stopAllSound() {
  $("#playerAudioObject").get(0).pause();
}
function showImlec() {
  $(".nextPage").html(
    '<img class="imlec" src="content/styles/img/imlec.gif" />'
  );
}
function clearImlec() {
  $(".nextPage").html("");
}
function callNextPage(e) {
  !(document.getElementById(ekranlar[currentPage].url).className = "") ===
  (isPageEnd = e)
    ? (showImlec(), !0 === continuous && !1 === tocControl && nextPage())
    : nextPage();
}
function setPageStatus() {
  for (var e = 0; e < pageArray.length; e++) {
    var t = pageArray[e] - 1;
    if (document.getElementById(ekranlar[t].url) != null) {
      (document.getElementById(ekranlar[t].url).className = ""),
        lastPage < CustumParseInt(t) && (lastPage = pageArray[e]);
    }
  }
  $.cookie.json = !0;
  var n = moduleInfo.no + learner.id + "quiz";
  $.cookie(n) && (questionData = JSON.parse($.cookie(n))), calculateQuizPoint();
}
function lockCallPage(e) {
  if (!0 === e) {
    var t = currentPage;
    $("#progressCol #currentPage").text(t),
      $("#course_screen").attr("src", "content/html/devam.html"),
      (navigationLocked = !0);
  } else (navigationLocked = !1), callURL(ekranlar[currentPage].url, "link");
}
function getStringState(e, t) {
  return "setStatus('" + e + "','" + t + "');";
}
function CustumParseInt(e) {
  var t = parseInt(e);
  return isNaN(t) ? 0 : t;
}
function continueLearning() {
  lockCallPage(!1);
}
void 0 !== localStorage.getItem("tincan_line") &&
  null != localStorage.getItem("tincan_line") &&
  (tincan_line = Base64.decode(localStorage.getItem("tincan_line"))),
  (tincan = new TinCan({
    url: window.location.href,
    activity: package.CourseActivity,
  })),
  null != localStorage.getItem("username")
    ? ((tincan_line +=
        "tincan =new TinCan({url:'" +
        window.location.href +
        "',activity:" +
        JSON.stringify(package.CourseActivity) +
        "});"),
      (offline = !0),
      (tincan_line +=
        'tincan.sendStatement({verb:"attempted",context:' +
        JSON.stringify(package.getContext()) +
        "});"))
    : tincan.sendStatement({
        verb: "attempted",
        context: package.getContext(),
      }),
  $(window).load(function () {}),
  (window.onunload = function () {
    offline &&
      ((tincan_line += getStringState(
        "location",
        localStorage.getItem(
          Base64.encode(package.CourseActivity.id) + "location"
        )
      )),
      (tincan_line += getStringState(
        "lastPage",
        localStorage.getItem(
          Base64.encode(package.CourseActivity.id) + "lastPage"
        )
      )),
      (tincan_line += getStringState(
        "completed",
        localStorage.getItem(
          Base64.encode(package.CourseActivity.id) + "completed"
        )
      )),
      (tincan_line += getStringState(
        "completaion",
        localStorage.getItem(
          Base64.encode(package.CourseActivity.id) + "completaion"
        )
      )),
      (tincan_line += getStringState(
        "score",
        localStorage.getItem(Base64.encode(package.CourseActivity.id) + "score")
      )),
      localStorage.setItem("tincan_line", Base64.encode(tincan_line))),
      end_course();
  }),
  ($.fn.delayed = function (timer, fnc) {
    var $this = $(this),
      item = setTimeout(function () {
        eval(fnc);
      }, timer);
    timeOuts.push(item);
  }),
  ($.fn.stopSound = function (e) {
    e.get(0).pause(), (e.get(0).currentTime = 0);
  }),
  $(document).ready(function () {
    (window.onblur = function () {
      "course_screen" != document.activeElement.id
        ? 0 == startStopScreenControl &&
          ((startStopScreenControl = !0),
          $("#course_screen")[0].contentWindow.vcStop())
        : ($("#course_screen")[0].contentWindow.onblur = function () {
            "player_body" != document.activeElement.id &&
              0 == startStopScreenControl &&
              ((startStopScreenControl = !0),
              $("#course_screen")[0].contentWindow.vcStop());
          });
    }),
      (window.onfocus = function () {
        1 == startStopScreenControl &&
          ((startStopScreenControl = !1),
          $("#course_screen")[0].contentWindow.vcPlay());
      });
  });
