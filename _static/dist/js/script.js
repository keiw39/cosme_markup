// スムーススクロールの設定
$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 200;
    let href = $(this).attr('href');
    let target = $(href == '#' || href == '' ? 'html' : href);
    let position = target.offset().top;
    $('html, body').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// ローディングアニメーション
$(window).on('load', function () {
  $('#p-loading').delay(3500).fadeOut('slow'); //ローディング画面を3.5秒（1500ms）待機してからフェードアウト
  $('#p-loading__wrap').delay(3300).fadeOut('slow'); //ロゴを3.3秒（1200ms）待機してからフェードアウト
});

const CLASSNAME = '-visible';
const TIMEOUT = 1170;
const $target = $('.p-loading__text');

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);

// humburger menu 開閉
$(
  (function () {
    $('#js-hamburger__toggle').on('click', function () {
      $('#js-hamburger__toggle').toggleClass('is-active');
      $('.l-spMenu').toggleClass('is-active');
    });
  })()
);

// spMenu 開閉
$(
  (function () {
    $('.l-spMenu__closeToggle').on('click', function () {
      $('#js-hamburger__toggle').toggleClass('is-active');
      $('.l-hamburger__toggleSpan').toggleClass('is-preparation');
      $('.l-hamburger__toggleSpan').toggleClass('is-active');
      $('.l-spMenu').toggleClass('is-active');
    });
  })()
);

// メニュー外をクリックした後にメニューを閉じる
$(document).click(function () {
  $('.l-spMenu').removeClass('is-active');
  $('#js-hamburger__toggle').removeClass('is-active');
});

// メニューの内部リンククリック後にメニューを閉じる
$(
  (function () {
    $('.l-spMenu__navLink').on('click', function () {
      $('.l-spMenu').removeClass('is-active');
      $('#js-hamburger__toggle').removeClass('is-active');
    });
  })()
);

// mvh(メインヴィジュアル)を超えるとヘッダーの背景色変更
var mvh = $('.p-home__mv').height();

$(window).scroll(function () {
  var top = $(window).scrollTop();
  if (mvh < top) {
    $('.l-header').css('background-color', 'rgba(255,255,255,0.95)');
  } else {
    $('.l-header').css('background-color', 'rgba(0,0,0,0)');
  }
});

$(function () {
  $('a.disable').click(function () {
    return false;
  });
});

// モーダルウィンドウ開閉
// ウィンドウを開く
$('.js-modal-open').each(function () {
  $(this).on('click', function () {
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    $(modal).fadeIn(300);
    return false;
  });
});

// ウィンドウを閉じる
$('.js-modal-close').on('click', function () {
  $('.c-modal').fadeOut(300);
  return false;
});

// 360px以下のviewportの設定
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

// slick01(メインヴィジュアル)設定
$(function () {
  $('.l-slick01').slick({
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

// slick01の数字表示
$('.l-slick01').on(
  'init reInit afterChange',
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.p-slick__number .p-slick__number__now-count')
      .text('0' + i)
      .slice(-1);
    $('.p-slick__number .p-slick__number__all-count')
      .text('0' + slick.slideCount)
      .slice(-1);
  }
);

// slick02(商品一覧)の設定
$(function () {
  function sliderSetting() {
    var width = $(window).width();

    if (width <= 768) {
      //768px以上はスライダー表示
      $('.l-slick02').not('.slick-initialized').slick({
        dots: true,
        arrows: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '9.65%',
      });
    } else {
      $('.slide.slick-initialized').slick('.unslick');
    }
  }

  sliderSetting();

  $(window).resize(function () {
    sliderSetting();
  });
});

// slick03(ブログ記事一覧)設定
$(function () {
  $('.l-slick03').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    centerMode: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
});
