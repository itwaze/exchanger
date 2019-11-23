var btcUSD = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
var ltcUSD = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD';
var ethUSD = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD';

var btcGBP = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCGBP';
var ltcGBP = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCGBP';
var ethGBP = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHGBP';

var ltcRUB = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCRUB';
var btcRUB = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCRUB';
var ethRUB = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHRUB';

var ltcEUR = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCEUR';
var btcEUR = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCEUR';
var ethEUR = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHEUR';

var element = $('li')
var elementUSD = $('.header__currency__usd');
var elementGBP = $('.header__currency__inner--color:first-child');
var elementRUB = $('.header__currency__inner--color:nth-child(2)');
var elementEUR = $('.header__currency__inner--color:last-child');

elementUSD.click(function() {
    element.removeClass('active');
    elementUSD.toggleClass('active')
    $.ajax({
        url: ethUSD,
        dataType: 'json',
        success: function(data){
            var lastEthValue = data.last.toFixed(2);
            var ethPrice = $('.content__block__ethereum .content__block__price:first-of-type span:last-child');

            var hourChangesValue = data.changes.percent.hour;
            var ethHour = $('.content__block__ethereum .content__block__price:nth-child(3) span:last-child');
            
            var dayChangesValue = data.changes.percent.day;
            var ethDay = $('.content__block__ethereum .content__block__price:nth-child(4) span:last-child');

            var weekChangesValue = data.changes.percent.week;
            var ethWeek = $('.content__block__ethereum .content__block__price:nth-child(5) span:last-child');

            var monthChangesValue = data.changes.percent.month;
            var ethMonth = $('.content__block__ethereum .content__block__price:last-child span:last-child');

            ethPrice.html('$' + lastEthValue);
            ethHour.html(hourChangesValue + '%');
            ethDay.html(dayChangesValue + '%');
            ethWeek.html(weekChangesValue + '%');
            ethMonth.html(monthChangesValue + '%');

            regExp();

            var ethCircle = $('.content__block__ethereum .content__block__switch--circle');

            ethCircle.click(function() {
                if (elementUSD.hasClass('active')) $(this).toggleClass('activeUSD');
                var line = $(this).next();
                
                if ($(window).width() >= 2560 && $(this).hasClass('activeUSD')) {

                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })
                    $(this).css('marginLeft', '42px');

                    ethHour.html(data.changes.price.hour.toFixed(2) + '$');
                    ethDay.html(data.changes.price.day.toFixed(2) + '$');
                    ethWeek.html(data.changes.price.week.toFixed(2) + '$');
                    ethMonth.html(data.changes.price.month.toFixed(2) + '$');
                } else if ($(window).width() >= 2560 && !$(this).hasClass('activeUSD')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })

                    ethHour.html(hourChangesValue + '%');
                    ethDay.html(dayChangesValue + '%');
                    ethWeek.html(weekChangesValue + '%');
                    ethMonth.html(monthChangesValue + '%');
                }

                if ($(window).width() != 2560 && $(this).hasClass('activeUSD')) {
                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                    })
                    $(this).css('marginLeft', '17px');

                    ethHour.html(data.changes.price.hour.toFixed(2) + '$');
                    ethDay.html(data.changes.price.day.toFixed(2) + '$');
                    ethWeek.html(data.changes.price.week.toFixed(2) + '$');
                    ethMonth.html(data.changes.price.month.toFixed(2) + '$');
                } else if ($(window).width() != 2560 && !$(this).hasClass('activeUSD')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 4px no-repeat'
                    })

                    ethHour.html(hourChangesValue + '%');
                    ethDay.html(dayChangesValue + '%');
                    ethWeek.html(weekChangesValue + '%');
                    ethMonth.html(monthChangesValue + '%');
                }
                
            })
        }
      });

      $.ajax({
        url: ltcUSD,
        dataType: 'json',
        success: function(data){
            var lastLtcValue = data.last.toFixed(2);
            var ltcPrice = $('.content__block__litecoin .content__block__price:first-of-type span:last-child');

            var hourChangesValue = data.changes.percent.hour;
            var ltcHour = $('.content__block__litecoin .content__block__price:nth-child(3) span:last-child');
            
            var dayChangesValue = data.changes.percent.day;
            var ltcDay = $('.content__block__litecoin .content__block__price:nth-child(4) span:last-child');

            var weekChangesValue = data.changes.percent.week;
            var ltcWeek = $('.content__block__litecoin .content__block__price:nth-child(5) span:last-child');

            var monthChangesValue = data.changes.percent.month;
            var ltcMonth = $('.content__block__litecoin .content__block__price:last-child span:last-child');

            ltcPrice.html('$' + lastLtcValue);
            ltcHour.html(hourChangesValue + '%');
            ltcDay.html(dayChangesValue + '%');
            ltcWeek.html(weekChangesValue + '%');
            ltcMonth.html(monthChangesValue + '%');

            regExp();

            var ltcCircle = $('.content__block__litecoin .content__block__switch--circle');

            ltcCircle.click(function() {
                if (elementUSD.hasClass('active')) $(this).toggleClass('activeUSD');
                var line = $(this).next();
                
                if ($(window).width() >= 2560 && $(this).hasClass('activeUSD')) {

                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })
                    $(this).css('marginLeft', '42px');

                    ltcHour.html(data.changes.price.hour.toFixed(2) + '$');
                    ltcDay.html(data.changes.price.day.toFixed(2) + '$');
                    ltcWeek.html(data.changes.price.week.toFixed(2) + '$');
                    ltcMonth.html(data.changes.price.month.toFixed(2) + '$');
                } else if ($(window).width() >= 2560 && !$(this).hasClass('activeUSD')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })

                    ltcHour.html(hourChangesValue + '%');
                    ltcDay.html(dayChangesValue + '%');
                    ltcWeek.html(weekChangesValue + '%');
                    ltcMonth.html(monthChangesValue + '%');
                }

                if ($(window).width() != 2560 && $(this).hasClass('activeUSD')) {
                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                    })
                    $(this).css('marginLeft', '17px');

                    ltcHour.html(data.changes.price.hour.toFixed(2) + '$');
                    ltcDay.html(data.changes.price.day.toFixed(2) + '$');
                    ltcWeek.html(data.changes.price.week.toFixed(2) + '$');
                    ltcMonth.html(data.changes.price.month.toFixed(2) + '$');
                } else if ($(window).width() != 2560 && !$(this).hasClass('activeUSD')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 4px no-repeat'
                    })

                    ltcHour.html(hourChangesValue + '%');
                    ltcDay.html(dayChangesValue + '%');
                    ltcWeek.html(weekChangesValue + '%');
                    ltcMonth.html(monthChangesValue + '%');
                }
                
            })
        }
      });

      $.ajax({
        url: btcUSD,
        dataType: 'json',
        success: function(data){
            var lastBtcValue = data.last.toFixed(2);
            var btcPrice = $('.content__block__bitcoin .content__block__price:first-of-type span:last-child');

            var hourChangesValue = data.changes.percent.hour;
            var btcHour = $('.content__block__bitcoin .content__block__price:nth-child(3) span:last-child');
            
            var dayChangesValue = data.changes.percent.day;
            var btcDay = $('.content__block__bitcoin .content__block__price:nth-child(4) span:last-child');

            var weekChangesValue = data.changes.percent.week;
            var btcWeek = $('.content__block__bitcoin .content__block__price:nth-child(5) span:last-child');

            var monthChangesValue = data.changes.percent.month;
            var btcMonth = $('.content__block__bitcoin .content__block__price:last-child span:last-child');

            btcPrice.html('$' + lastBtcValue);
            btcHour.html(hourChangesValue + '%');
            btcDay.html(dayChangesValue + '%');
            btcWeek.html(weekChangesValue + '%');
            btcMonth.html(monthChangesValue + '%');

            regExp();

            var btcCircle = $('.content__block__bitcoin .content__block__switch--circle');

            btcCircle.click(function() {
                if (elementUSD.hasClass('active')) $(this).toggleClass('activeUSD');
                var line = $(this).next();
                
                if ($(window).width() >= 2560 && $(this).hasClass('activeUSD')) {

                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })
                    $(this).css('marginLeft', '42px');

                    btcHour.html(data.changes.price.hour.toFixed(2) + '$');
                    btcDay.html(data.changes.price.day.toFixed(2) + '$');
                    btcWeek.html(data.changes.price.week.toFixed(2) + '$');
                    btcMonth.html(data.changes.price.month.toFixed(2) + '$');
                } else if ($(window).width() >= 2560 && !$(this).hasClass('activeUSD')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })

                    btcHour.html(hourChangesValue + '%');
                    btcDay.html(dayChangesValue + '%');
                    btcWeek.html(weekChangesValue + '%');
                    btcMonth.html(monthChangesValue + '%');
                }

                if ($(window).width() != 2560 && $(this).hasClass('activeUSD')) {
                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                    })
                    $(this).css('marginLeft', '17px');

                    btcHour.html(data.changes.price.hour.toFixed(2) + '$');
                    btcDay.html(data.changes.price.day.toFixed(2) + '$');
                    btcWeek.html(data.changes.price.week.toFixed(2) + '$');
                    btcMonth.html(data.changes.price.month.toFixed(2) + '$');
                } else if ($(window).width() != 2560 && !$(this).hasClass('activeUSD')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 4px no-repeat'
                    })

                    btcHour.html(hourChangesValue + '%');
                    btcDay.html(dayChangesValue + '%');
                    btcWeek.html(weekChangesValue + '%');
                    btcMonth.html(monthChangesValue + '%');
                }
                
            })
        }
      });
})

elementEUR.click(function() {
    element.removeClass('active');
    elementEUR.toggleClass('active')
    $.ajax({
        url: ethEUR,
        dataType: 'json',
        success: function(data){
            var lastEthValue = data.last.toFixed(2);
            var ethPrice = $('.content__block__ethereum .content__block__price:first-of-type span:last-child');

            var hourChangesValue = data.changes.percent.hour;
            var ethHour = $('.content__block__ethereum .content__block__price:nth-child(3) span:last-child');
            
            var dayChangesValue = data.changes.percent.day;
            var ethDay = $('.content__block__ethereum .content__block__price:nth-child(4) span:last-child');

            var weekChangesValue = data.changes.percent.week;
            var ethWeek = $('.content__block__ethereum .content__block__price:nth-child(5) span:last-child');

            var monthChangesValue = data.changes.percent.month;
            var ethMonth = $('.content__block__ethereum .content__block__price:last-child span:last-child');

            ethPrice.html('€' + lastEthValue);
            ethHour.html(hourChangesValue + '%');
            ethDay.html(dayChangesValue + '%');
            ethWeek.html(weekChangesValue + '%');
            ethMonth.html(monthChangesValue + '%');

            regExp();

            var ethCircle = $('.content__block__ethereum .content__block__switch--circle');

            ethCircle.click(function() {
                if (elementEUR.hasClass('active')) $(this).toggleClass('activeEUR');
                var line = $(this).next();
                
                if ($(window).width() >= 2560 && $(this).hasClass('activeEUR')) {

                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })
                    $(this).css('marginLeft', '42px');

                    ethHour.html(data.changes.price.hour.toFixed(2) + '€');
                    ethDay.html(data.changes.price.day.toFixed(2) + '€');
                    ethWeek.html(data.changes.price.week.toFixed(2) + '€');
                    ethMonth.html(data.changes.price.month.toFixed(2) + '€');
                } else if ($(window).width() >= 2560 && !$(this).hasClass('activeEUR')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })

                    ethHour.html(hourChangesValue + '%');
                    ethDay.html(dayChangesValue + '%');
                    ethWeek.html(weekChangesValue + '%');
                    ethMonth.html(monthChangesValue + '%');
                }

                if ($(window).width() != 2560 && $(this).hasClass('activeEUR')) {
                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                    })
                    $(this).css('marginLeft', '17px');

                    ethHour.html(data.changes.price.hour.toFixed(2) + '€');
                    ethDay.html(data.changes.price.day.toFixed(2) + '€');
                    ethWeek.html(data.changes.price.week.toFixed(2) + '€');
                    ethMonth.html(data.changes.price.month.toFixed(2) + '€');
                } else if ($(window).width() != 2560 && !$(this).hasClass('activeEUR')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 4px no-repeat'
                    })

                    ethHour.html(hourChangesValue + '%');
                    ethDay.html(dayChangesValue + '%');
                    ethWeek.html(weekChangesValue + '%');
                    ethMonth.html(monthChangesValue + '%');
                }
                
            })
        }
      });

      $.ajax({
        url: ltcEUR,
        dataType: 'json',
        success: function(data){
            var lastLtcValue = data.last.toFixed(2);
            var ltcPrice = $('.content__block__litecoin .content__block__price:first-of-type span:last-child');

            var hourChangesValue = data.changes.percent.hour;
            var ltcHour = $('.content__block__litecoin .content__block__price:nth-child(3) span:last-child');
            
            var dayChangesValue = data.changes.percent.day;
            var ltcDay = $('.content__block__litecoin .content__block__price:nth-child(4) span:last-child');

            var weekChangesValue = data.changes.percent.week;
            var ltcWeek = $('.content__block__litecoin .content__block__price:nth-child(5) span:last-child');

            var monthChangesValue = data.changes.percent.month;
            var ltcMonth = $('.content__block__litecoin .content__block__price:last-child span:last-child');

            ltcPrice.html('€' + lastLtcValue);
            ltcHour.html(hourChangesValue + '%');
            ltcDay.html(dayChangesValue + '%');
            ltcWeek.html(weekChangesValue + '%');
            ltcMonth.html(monthChangesValue + '%');

            regExp();

            var ltcCircle = $('.content__block__litecoin .content__block__switch--circle');

            ltcCircle.click(function() {
                if (elementEUR.hasClass('active')) $(this).toggleClass('activeEUR');
                var line = $(this).next();
                
                if ($(window).width() >= 2560 && $(this).hasClass('activeEUR')) {

                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })
                    $(this).css('marginLeft', '42px');

                    ltcHour.html(data.changes.price.hour.toFixed(2) + '€');
                    ltcDay.html(data.changes.price.day.toFixed(2) + '€');
                    ltcWeek.html(data.changes.price.week.toFixed(2) + '€');
                    ltcMonth.html(data.changes.price.month.toFixed(2) + '€');
                } else if ($(window).width() >= 2560 && !$(this).hasClass('activeEUR')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })

                    ltcHour.html(hourChangesValue + '%');
                    ltcDay.html(dayChangesValue + '%');
                    ltcWeek.html(weekChangesValue + '%');
                    ltcMonth.html(monthChangesValue + '%');
                }

                if ($(window).width() != 2560 && $(this).hasClass('activeEUR')) {
                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                    })
                    $(this).css('marginLeft', '17px');

                    ltcHour.html(data.changes.price.hour.toFixed(2) + '€');
                    ltcDay.html(data.changes.price.day.toFixed(2) + '€');
                    ltcWeek.html(data.changes.price.week.toFixed(2) + '€');
                    ltcMonth.html(data.changes.price.month.toFixed(2) + '€');
                } else if ($(window).width() != 2560 && !$(this).hasClass('activeEUR')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 4px no-repeat'
                    })

                    ltcHour.html(hourChangesValue + '%');
                    ltcDay.html(dayChangesValue + '%');
                    ltcWeek.html(weekChangesValue + '%');
                    ltcMonth.html(monthChangesValue + '%');
                }
                
            })
        }
      });

      $.ajax({
        url: btcEUR,
        dataType: 'json',
        success: function(data){
            var lastBtcValue = data.last.toFixed(2);
            var btcPrice = $('.content__block__bitcoin .content__block__price:first-of-type span:last-child');

            var hourChangesValue = data.changes.percent.hour;
            var btcHour = $('.content__block__bitcoin .content__block__price:nth-child(3) span:last-child');
            
            var dayChangesValue = data.changes.percent.day;
            var btcDay = $('.content__block__bitcoin .content__block__price:nth-child(4) span:last-child');

            var weekChangesValue = data.changes.percent.week;
            var btcWeek = $('.content__block__bitcoin .content__block__price:nth-child(5) span:last-child');

            var monthChangesValue = data.changes.percent.month;
            var btcMonth = $('.content__block__bitcoin .content__block__price:last-child span:last-child');

            btcPrice.html('€' + lastBtcValue);
            btcHour.html(hourChangesValue + '%');
            btcDay.html(dayChangesValue + '%');
            btcWeek.html(weekChangesValue + '%');
            btcMonth.html(monthChangesValue + '%');

            regExp();

            var btcCircle = $('.content__block__bitcoin .content__block__switch--circle');

            btcCircle.click(function() {
                if (elementEUR.hasClass('active')) $(this).toggleClass('activeEUR');
                var line = $(this).next();
                
                if ($(window).width() >= 2560 && $(this).hasClass('activeEUR')) {

                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })
                    $(this).css('marginLeft', '42px');

                    btcHour.html(data.changes.price.hour.toFixed(2) + '€');
                    btcDay.html(data.changes.price.day.toFixed(2) + '€');
                    btcWeek.html(data.changes.price.week.toFixed(2) + '€');
                    btcMonth.html(data.changes.price.month.toFixed(2) + '€');
                } else if ($(window).width() >= 2560 && !$(this).hasClass('activeEUR')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 7px no-repeat',
                        'width': '90px',
                        'height': '50px',
                        'position': 'absolute',
                        'background-size': '100%'
                    })

                    btcHour.html(hourChangesValue + '%');
                    btcDay.html(dayChangesValue + '%');
                    btcWeek.html(weekChangesValue + '%');
                    btcMonth.html(monthChangesValue + '%');
                }

                if ($(window).width() != 2560 && $(this).hasClass('activeEUR')) {
                    line.css({
                        'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                    })
                    $(this).css('marginLeft', '17px');

                    btcHour.html(data.changes.price.hour.toFixed(2) + '€');
                    btcDay.html(data.changes.price.day.toFixed(2) + '€');
                    btcWeek.html(data.changes.price.week.toFixed(2) + '€');
                    btcMonth.html(data.changes.price.month.toFixed(2) + '€');
                } else if ($(window).width() != 2560 && !$(this).hasClass('activeEUR')) {
                    $(this).css('marginLeft', '0');
                    line.css({
                        'background': 'url(assets/img/line.png) 0 4px no-repeat'
                    })

                    btcHour.html(hourChangesValue + '%');
                    btcDay.html(dayChangesValue + '%');
                    btcWeek.html(weekChangesValue + '%');
                    btcMonth.html(monthChangesValue + '%');
                }
                
            })
        }
      });
})

elementRUB.click(function() {
    element.removeClass('active');
        elementRUB.toggleClass('active')
        $.ajax({
            url: ethRUB,
            dataType: 'json',
            success: function(data){
                var lastEthValue = data.last.toFixed(2);
                var ethPrice = $('.content__block__ethereum .content__block__price:first-of-type span:last-child');
    
                var hourChangesValue = data.changes.percent.hour;
                var ethHour = $('.content__block__ethereum .content__block__price:nth-child(3) span:last-child');
                
                var dayChangesValue = data.changes.percent.day;
                var ethDay = $('.content__block__ethereum .content__block__price:nth-child(4) span:last-child');
    
                var weekChangesValue = data.changes.percent.week;
                var ethWeek = $('.content__block__ethereum .content__block__price:nth-child(5) span:last-child');
    
                var monthChangesValue = data.changes.percent.month;
                var ethMonth = $('.content__block__ethereum .content__block__price:last-child span:last-child');
    
                ethPrice.html('₽' + lastEthValue);
                ethHour.html(hourChangesValue + '%');
                ethDay.html(dayChangesValue + '%');
                ethWeek.html(weekChangesValue + '%');
                ethMonth.html(monthChangesValue + '%');

                regExp();
    
                var ethCircle = $('.content__block__ethereum .content__block__switch--circle');
    
                ethCircle.click(function() {
                    if (elementRUB.hasClass('active')) $(this).toggleClass('activeRUB');
                    var line = $(this).next();
                    
                    if ($(window).width() >= 2560 && $(this).hasClass('activeRUB')) {
    
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
                        $(this).css('marginLeft', '42px');
    
                        ethHour.html(data.changes.price.hour.toFixed(2) + '₽');
                        ethDay.html(data.changes.price.day.toFixed(2) + '₽');
                        ethWeek.html(data.changes.price.week.toFixed(2) + '₽');
                        ethMonth.html(data.changes.price.month.toFixed(2) + '₽');
                    } else if ($(window).width() >= 2560 && !$(this).hasClass('activeRUB')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
    
                        ethHour.html(hourChangesValue + '%');
                        ethDay.html(dayChangesValue + '%');
                        ethWeek.html(weekChangesValue + '%');
                        ethMonth.html(monthChangesValue + '%');
                    }
    
                    if ($(window).width() != 2560 && $(this).hasClass('activeRUB')) {
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                        })
                        $(this).css('marginLeft', '17px');
    
                        ethHour.html(data.changes.price.hour.toFixed(2) + '₽');
                        ethDay.html(data.changes.price.day.toFixed(2) + '₽');
                        ethWeek.html(data.changes.price.week.toFixed(2) + '₽');
                        ethMonth.html(data.changes.price.month.toFixed(2) + '₽');
                    } else if ($(window).width() != 2560 && !$(this).hasClass('activeRUB')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 4px no-repeat'
                        })
    
                        ethHour.html(hourChangesValue + '%');
                        ethDay.html(dayChangesValue + '%');
                        ethWeek.html(weekChangesValue + '%');
                        ethMonth.html(monthChangesValue + '%');
                    }
                    
                })
            }
          });

          $.ajax({
            url: ltcRUB,
            dataType: 'json',
            success: function(data){
                var lastLtcValue = data.last.toFixed(2);
                var ltcPrice = $('.content__block__litecoin .content__block__price:first-of-type span:last-child');
    
                var hourChangesValue = data.changes.percent.hour;
                var ltcHour = $('.content__block__litecoin .content__block__price:nth-child(3) span:last-child');
                
                var dayChangesValue = data.changes.percent.day;
                var ltcDay = $('.content__block__litecoin .content__block__price:nth-child(4) span:last-child');
    
                var weekChangesValue = data.changes.percent.week;
                var ltcWeek = $('.content__block__litecoin .content__block__price:nth-child(5) span:last-child');
    
                var monthChangesValue = data.changes.percent.month;
                var ltcMonth = $('.content__block__litecoin .content__block__price:last-child span:last-child');
    
                ltcPrice.html('₽' + lastLtcValue);
                ltcHour.html(hourChangesValue + '%');
                ltcDay.html(dayChangesValue + '%');
                ltcWeek.html(weekChangesValue + '%');
                ltcMonth.html(monthChangesValue + '%');

                regExp();
    
                var ltcCircle = $('.content__block__litecoin .content__block__switch--circle');
    
                ltcCircle.click(function() {
                    if (elementRUB.hasClass('active')) $(this).toggleClass('activeRUB');
                    var line = $(this).next();
                    
                    if ($(window).width() >= 2560 && $(this).hasClass('activeRUB')) {
    
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
                        $(this).css('marginLeft', '42px');
    
                        ltcHour.html(data.changes.price.hour.toFixed(2) + '₽');
                        ltcDay.html(data.changes.price.day.toFixed(2) + '₽');
                        ltcWeek.html(data.changes.price.week.toFixed(2) + '₽');
                        ltcMonth.html(data.changes.price.month.toFixed(2) + '₽');
                    } else if ($(window).width() >= 2560 && !$(this).hasClass('activeRUB')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
    
                        ltcHour.html(hourChangesValue + '%');
                        ltcDay.html(dayChangesValue + '%');
                        ltcWeek.html(weekChangesValue + '%');
                        ltcMonth.html(monthChangesValue + '%');
                    }
    
                    if ($(window).width() != 2560 && $(this).hasClass('activeRUB')) {
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                        })
                        $(this).css('marginLeft', '17px');
    
                        ltcHour.html(data.changes.price.hour.toFixed(2) + '₽');
                        ltcDay.html(data.changes.price.day.toFixed(2) + '₽');
                        ltcWeek.html(data.changes.price.week.toFixed(2) + '₽');
                        ltcMonth.html(data.changes.price.month.toFixed(2) + '₽');
                    } else if ($(window).width() != 2560 && !$(this).hasClass('activeRUB')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 4px no-repeat'
                        })
    
                        ltcHour.html(hourChangesValue + '%');
                        ltcDay.html(dayChangesValue + '%');
                        ltcWeek.html(weekChangesValue + '%');
                        ltcMonth.html(monthChangesValue + '%');
                    }
                    
                })
            }
          });

          $.ajax({
            url: btcRUB,
            dataType: 'json',
            success: function(data){
                var lastBtcValue = data.last.toFixed(2);
                var btcPrice = $('.content__block__bitcoin .content__block__price:first-of-type span:last-child');
    
                var hourChangesValue = data.changes.percent.hour;
                var btcHour = $('.content__block__bitcoin .content__block__price:nth-child(3) span:last-child');
                
                var dayChangesValue = data.changes.percent.day;
                var btcDay = $('.content__block__bitcoin .content__block__price:nth-child(4) span:last-child');
    
                var weekChangesValue = data.changes.percent.week;
                var btcWeek = $('.content__block__bitcoin .content__block__price:nth-child(5) span:last-child');
    
                var monthChangesValue = data.changes.percent.month;
                var btcMonth = $('.content__block__bitcoin .content__block__price:last-child span:last-child');
    
                btcPrice.html('₽' + lastBtcValue);
                btcHour.html(hourChangesValue + '%');
                btcDay.html(dayChangesValue + '%');
                btcWeek.html(weekChangesValue + '%');
                btcMonth.html(monthChangesValue + '%');

                regExp();
    
                var btcCircle = $('.content__block__bitcoin .content__block__switch--circle');
    
                btcCircle.click(function() {
                    if (elementRUB.hasClass('active')) $(this).toggleClass('activeRUB');
                    var line = $(this).next();
                    
                    if ($(window).width() >= 2560 && $(this).hasClass('activeRUB')) {
    
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
                        $(this).css('marginLeft', '42px');
    
                        btcHour.html(data.changes.price.hour.toFixed(2) + '₽');
                        btcDay.html(data.changes.price.day.toFixed(2) + '₽');
                        btcWeek.html(data.changes.price.week.toFixed(2) + '₽');
                        btcMonth.html(data.changes.price.month.toFixed(2) + '₽');
                    } else if ($(window).width() >= 2560 && !$(this).hasClass('activeRUB')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
    
                        btcHour.html(hourChangesValue + '%');
                        btcDay.html(dayChangesValue + '%');
                        btcWeek.html(weekChangesValue + '%');
                        btcMonth.html(monthChangesValue + '%');
                    }
    
                    if ($(window).width() != 2560 && $(this).hasClass('activeRUB')) {
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                        })
                        $(this).css('marginLeft', '17px');
    
                        btcHour.html(data.changes.price.hour.toFixed(2) + '₽');
                        btcDay.html(data.changes.price.day.toFixed(2) + '₽');
                        btcWeek.html(data.changes.price.week.toFixed(2) + '₽');
                        btcMonth.html(data.changes.price.month.toFixed(2) + '₽');
                    } else if ($(window).width() != 2560 && !$(this).hasClass('activeRUB')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 4px no-repeat'
                        })
    
                        btcHour.html(hourChangesValue + '%');
                        btcDay.html(dayChangesValue + '%');
                        btcWeek.html(weekChangesValue + '%');
                        btcMonth.html(monthChangesValue + '%');
                    }
                    
                })
            }
          });
})

elementGBP.click(function() {
    element.removeClass('active');
        elementGBP.toggleClass('active')
        $.ajax({
            url: ethGBP,
            dataType: 'json',
            success: function(data){
                var lastEthValue = data.last.toFixed(2);
                var ethPrice = $('.content__block__ethereum .content__block__price:first-of-type span:last-child');
    
                var hourChangesValue = data.changes.percent.hour;
                var ethHour = $('.content__block__ethereum .content__block__price:nth-child(3) span:last-child');
                
                var dayChangesValue = data.changes.percent.day;
                var ethDay = $('.content__block__ethereum .content__block__price:nth-child(4) span:last-child');
    
                var weekChangesValue = data.changes.percent.week;
                var ethWeek = $('.content__block__ethereum .content__block__price:nth-child(5) span:last-child');
    
                var monthChangesValue = data.changes.percent.month;
                var ethMonth = $('.content__block__ethereum .content__block__price:last-child span:last-child');
    
                ethPrice.html('£' + lastEthValue);
                ethHour.html(hourChangesValue + '%');
                ethDay.html(dayChangesValue + '%');
                ethWeek.html(weekChangesValue + '%');
                ethMonth.html(monthChangesValue + '%');

                regExp();
    
                var ethCircle = $('.content__block__ethereum .content__block__switch--circle');
    
                ethCircle.click(function() {
                    if (elementGBP.hasClass('active')) $(this).toggleClass('activeGBP');
                    var line = $(this).next();
                    
                    if ($(window).width() >= 2560 && $(this).hasClass('activeGBP')) {
    
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
                        $(this).css('marginLeft', '42px');
    
                        btcHour.html(data.changes.price.hour.toFixed(2) + '£');
                        btcDay.html(data.changes.price.day.toFixed(2) + '£');
                        btcWeek.html(data.changes.price.week.toFixed(2) + '£');
                        btcMonth.html(data.changes.price.month.toFixed(2) + '£');
                    } else if ($(window).width() >= 2560 && !$(this).hasClass('activeGBP')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
    
                        btcHour.html(hourChangesValue + '%');
                        btcDay.html(dayChangesValue + '%');
                        btcWeek.html(weekChangesValue + '%');
                        btcMonth.html(monthChangesValue + '%');
                    }
    
                    if ($(window).width() != 2560 && $(this).hasClass('activeGBP')) {
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                        })
                        $(this).css('marginLeft', '17px');
    
                        btcHour.html(data.changes.price.hour.toFixed(2) + '£');
                        btcDay.html(data.changes.price.day.toFixed(2) + '£');
                        btcWeek.html(data.changes.price.week.toFixed(2) + '£');
                        btcMonth.html(data.changes.price.month.toFixed(2) + '£');
                    } else if ($(window).width() != 2560 && !$(this).hasClass('activeGBP')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 4px no-repeat'
                        })
    
                        btcHour.html(hourChangesValue + '%');
                        btcDay.html(dayChangesValue + '%');
                        btcWeek.html(weekChangesValue + '%');
                        btcMonth.html(monthChangesValue + '%');
                    }
                    
                })
            }
          }); 

          $.ajax({
            url: ltcGBP,
            dataType: 'json',
            success: function(data){
                var lastLtcValue = data.last.toFixed(2);
                var ltcPrice = $('.content__block__litecoin .content__block__price:first-of-type span:last-child');
    
                var hourChangesValue = data.changes.percent.hour;
                var ltcHour = $('.content__block__litecoin .content__block__price:nth-child(3) span:last-child');
                
                var dayChangesValue = data.changes.percent.day;
                var ltcDay = $('.content__block__litecoin .content__block__price:nth-child(4) span:last-child');
    
                var weekChangesValue = data.changes.percent.week;
                var ltcWeek = $('.content__block__litecoin .content__block__price:nth-child(5) span:last-child');
    
                var monthChangesValue = data.changes.percent.month;
                var ltcMonth = $('.content__block__litecoin .content__block__price:last-child span:last-child');
    
                ltcPrice.html('£' + lastLtcValue);
                ltcHour.html(hourChangesValue + '%');
                ltcDay.html(dayChangesValue + '%');
                ltcWeek.html(weekChangesValue + '%');
                ltcMonth.html(monthChangesValue + '%');

                regExp();
    
                var ltcCircle = $('.content__block__litecoin .content__block__switch--circle');
    
                ltcCircle.click(function() {
                    if (elementGBP.hasClass('active')) $(this).toggleClass('activeGBP');
                    var line = $(this).next();
                    
                    if ($(window).width() >= 2560 && $(this).hasClass('activeGBP')) {
    
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
                        $(this).css('marginLeft', '42px');
    
                        ltcHour.html(data.changes.price.hour.toFixed(2) + '£');
                        ltcDay.html(data.changes.price.day.toFixed(2) + '£');
                        ltcWeek.html(data.changes.price.week.toFixed(2) + '£');
                        ltcMonth.html(data.changes.price.month.toFixed(2) + '£');
                    } else if ($(window).width() >= 2560 && !$(this).hasClass('activeGBP')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
    
                        ltcHour.html(hourChangesValue + '%');
                        ltcDay.html(dayChangesValue + '%');
                        ltcWeek.html(weekChangesValue + '%');
                        ltcMonth.html(monthChangesValue + '%');
                    }
    
                    if ($(window).width() != 2560 && $(this).hasClass('activeGBP')) {
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                        })
                        $(this).css('marginLeft', '17px');
    
                        ltcHour.html(data.changes.price.hour.toFixed(2) + '£');
                        ltcDay.html(data.changes.price.day.toFixed(2) + '£');
                        ltcWeek.html(data.changes.price.week.toFixed(2) + '£');
                        ltcMonth.html(data.changes.price.month.toFixed(2) + '£');
                    } else if ($(window).width() != 2560 && !$(this).hasClass('activeGBP')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 4px no-repeat'
                        })
    
                        ltcHour.html(hourChangesValue + '%');
                        ltcDay.html(dayChangesValue + '%');
                        ltcWeek.html(weekChangesValue + '%');
                        ltcMonth.html(monthChangesValue + '%');
                    }
                    
                })
            }
          });

          $.ajax({
            url: btcGBP,
            dataType: 'json',
            success: function(data){
                var lastBtcValue = data.last.toFixed(2);
                var btcPrice = $('.content__block__bitcoin .content__block__price:first-of-type span:last-child');
    
                var hourChangesValue = data.changes.percent.hour;
                var btcHour = $('.content__block__bitcoin .content__block__price:nth-child(3) span:last-child');
                
                var dayChangesValue = data.changes.percent.day;
                var btcDay = $('.content__block__bitcoin .content__block__price:nth-child(4) span:last-child');
    
                var weekChangesValue = data.changes.percent.week;
                var btcWeek = $('.content__block__bitcoin .content__block__price:nth-child(5) span:last-child');
    
                var monthChangesValue = data.changes.percent.month;
                var btcMonth = $('.content__block__bitcoin .content__block__price:last-child span:last-child');
    
                btcPrice.html('£' + lastBtcValue);
                btcHour.html(hourChangesValue + '%');
                btcDay.html(dayChangesValue + '%');
                btcWeek.html(weekChangesValue + '%');
                btcMonth.html(monthChangesValue + '%');

                regExp();
    
                var btcCircle = $('.content__block__bitcoin .content__block__switch--circle');
    
                btcCircle.click(function() {
                    if (elementGBP.hasClass('active')) $(this).toggleClass('activeGBP');
                    var line = $(this).next();
                    
                    if ($(window).width() >= 2560 && $(this).hasClass('activeGBP')) {
    
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
                        $(this).css('marginLeft', '42px');
    
                        btcHour.html(data.changes.price.hour.toFixed(2) + '£');
                        btcDay.html(data.changes.price.day.toFixed(2) + '£');
                        btcWeek.html(data.changes.price.week.toFixed(2) + '£');
                        btcMonth.html(data.changes.price.month.toFixed(2) + '£');
                    } else if ($(window).width() >= 2560 && !$(this).hasClass('activeGBP')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 7px no-repeat',
                            'width': '90px',
                            'height': '50px',
                            'position': 'absolute',
                            'background-size': '100%'
                        })
    
                        btcHour.html(hourChangesValue + '%');
                        btcDay.html(dayChangesValue + '%');
                        btcWeek.html(weekChangesValue + '%');
                        btcMonth.html(monthChangesValue + '%');
                    }
    
                    if ($(window).width() != 2560 && $(this).hasClass('activeGBP')) {
                        line.css({
                            'background': 'url(assets/img/gray-line.png) 0 4px no-repeat'
                        })
                        $(this).css('marginLeft', '17px');
    
                        btcHour.html(data.changes.price.hour.toFixed(2) + '£');
                        btcDay.html(data.changes.price.day.toFixed(2) + '£');
                        btcWeek.html(data.changes.price.week.toFixed(2) + '£');
                        btcMonth.html(data.changes.price.month.toFixed(2) + '£');
                    } else if ($(window).width() != 2560 && !$(this).hasClass('activeGBP')) {
                        $(this).css('marginLeft', '0');
                        line.css({
                            'background': 'url(assets/img/line.png) 0 4px no-repeat'
                        })
    
                        btcHour.html(hourChangesValue + '%');
                        btcDay.html(dayChangesValue + '%');
                        btcWeek.html(weekChangesValue + '%');
                        btcMonth.html(monthChangesValue + '%');
                    }
                    
                })
            }
          });
})

function regExp() {
    var num = $('.content__block__price:nth-child(n+3) span:last-child');
      
        num.each(function() {
           var num = $(this).text();
           var color = num.match(/-/) ? 
           $(this).css('color', 'red') : 
           $(this).css('color', 'limegreen');
        })
}

$(document).ready(function() {
    elementUSD.trigger('click')
})

