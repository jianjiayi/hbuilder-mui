/* 校验方法库-- 命名格式：isSomeName, 函数传要校验的value, 返回值为布尔值 */
 var methods = {
    /**
     * 非空校验
     * @param  {[ ]}
     * @return {Boolean}
     */
    isNoEmpty: function (value) {
      return !!value;
    },
    /**
     * 护照校验
     * @param  {[type]}
     * @return {Boolean}
     */
    isHid: function (id) {
      // var reg = /^[a-zA-Z0-9]{7,20}$/;
      var reg = /^.{3,18}$/;
      return reg.test(id);
    },
    /**
     * 电话号码校验
     * @param  {String}
     * @return {Boolean}
     */
    isPhoneNum: function (phoneNumber) {
      var reg = /^[0-9]{0,18}$/;
      return reg.test(phoneNumber);
    },
    /**
     * 居住地址校验
     * @param  {string}
     * @return {Boolean}
     */
    isAddress: function (address) {
      var strlen = 0;
      for (var i = 0; i < address.length; i++) {
        if (address.charCodeAt(i) > 255) strlen++;
      }
      if (strlen < 4 || address.length >= 120) {
        return false;
      } else {
        return true;
      }
    },
    /**
     * 邮编校验
     * @param  {string}
     * @return {Boolean}
     */
    isZipCode: function (zipCode) {
      var pattern = /^[0-9]{6}$/;
      return pattern.test(zipCode);
    },
    /**
     * 姓名校验
     * @param  {string}
     * @return {Boolean}
     */
    isName: function (name) {
      var l = 0;
      var a = name.split('');
      for (var i = 0; i < a.length; i++) {
        if (a[i].charCodeAt(0) < 299) {
          l++;
        } else {
          l += 2;
        }
      }
      var isp = new RegExp(/^([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])*$/).test(name);
      var name2 = name.replace(/[·]/g, 0);
      var isp2 = new RegExp(/[.．。，、?]/g).test(name);
      var isp4 = new RegExp(/^(([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])+0)*([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])+$/).test(name2);
      if (l < 3 || l > 27 || !isp || isp2 || !isp4) {
        return false;
      }
      return true;
    },
    /**
     * 身份证校验
     * @param  {string}
     * @return {Boolean}
     */
    isIdCard: function (idCard) {
    var SystemDate = new Date();
    var year = SystemDate.getFullYear();
    var month = SystemDate.getMonth() + 1;
    var day = SystemDate.getDate();
    var yyyy; // 年
    var mm; // 月
    var dd; // 日

    var id = idCard = idCard.toLocaleUpperCase();
    if (!id) {
      // alert('请输入身份证号码!');
      return false;
    }
    var idLength = id.length;
    if (idLength !== 18) {
      // alert('身份证号长度应为18位！');
      return false;
    }
    if (idLength === 18) {

      for (var i = 0; i < idLength - 1; i++) {
        if (isNaN(idCard.charAt(i))) {
          return false;
        }
      }

      if (isNaN(idCard.charAt(17)) && idCard.charAt(17) !== 'X') {
        // alert('身份证校验错误，请认真检查！');
        return false;
      }

         if (idCard.charAt(0) === '7' || idCard.charAt(0) === '8' || idCard.charAt(0) === '9') {
           // alert('身份证校验错误，请认真检查！');
            return false;
         }
      if (idCard.indexOf('X') > 0 && idCard.indexOf('X') !== 17 || idCard.indexOf('x') > 0 && idCard.indexOf('x') !== 17) {
        // alert('身份证中\'X\'输入位置不正确！');
        return false;
      }

      yyyy = id.substring(6, 10);
      if (yyyy > year || yyyy < 1900) {
        // alert('身份证号年度非法！');
        return false;
      }

      mm = id.substring(10, 12);
      if (mm > 12 || mm <= 0) {
        // alert('身份证号月份非法！');
        return false;
      }
      if (yyyy === year && mm > month) {
        // alert('身份证号月份非法！');
        return false;
      }

      dd = id.substring(12, 14);
      if (dd > 31 || dd <= 0) {
        // alert('身份证号日期非法！');
        return false;
      }

      if ((mm === 4 || mm === 6 || mm === 9 || mm === 11) && (dd > 30)) { // 4,6,9,11月份日期不能超过30
        // alert('身份证号日期非法！');
        return false;
      }

      if (mm === 2) { // 判断2月份
        //
        var isTrue = false;
        if (yyyy % 100 === 0) {
          if (yyyy % 400 === 0) {
            isTrue = true;
          }
        } else {
          if ((yyyy % 4) === 0) {
            isTrue = true;
          }
        }
        //
        if (isTrue) {
          if (dd > 29) {
            // alert('身份证号日期非法！');
            return false;
          }
        } else {
          if (dd > 28) {
            // alert('身份证号日期非法！');
            return false;
          }
        }
      }
      if (yyyy === year && mm === month && dd > day) {
        // alert('身份证号日期非法！');
        return false;
      }
      //
      var result = '';
      var nNum = id.charAt(0) * 7 + id.charAt(1) * 9 + id.charAt(2) * 10 +
        id.charAt(3) * 5 + id.charAt(4) * 8 + id.charAt(5) * 4 +
        id.charAt(6) * 2 + id.charAt(7) * 1 + id.charAt(8) * 6 +
        id.charAt(9) * 3 + id.charAt(10) * 7 + id.charAt(11) * 9 +
        id.charAt(12) * 10 + id.charAt(13) * 5 + id.charAt(14) * 8 +
        id.charAt(15) * 4 + id.charAt(16) * 2;
      nNum = nNum % 11;
      switch (nNum) {
      case 0:
        result = '1';
        break;
      case 1:
        result = '0';
        break;
      case 2:
        result = 'X';
        break;
      case 3:
        result = '9';
        break;
      case 4:
        result = '8';
        break;
      case 5:
        result = '7';
        break;
      case 6:
        result = '6';
        break;
      case 7:
        result = '5';
        break;
      case 8:
        result = '4';
        break;
      case 9:
        result = '3';
        break;
      case 10:
        result = '2';
        break;
      }
      //
      if (id.charAt(17) === 'x' || id.charAt(17) === 'X') {
        if (result !== 'x' && result !== 'X') {
          // alert('身份证校验错误，请认真检查！');
          return false;
        }

      } else {
        if (id.charAt(17) !== result) {
          // alert('身份证校验错误，请认真检查！');
          return false;
        }
      }
    }
    return true;
    },
    /**
     * 年龄校验
     * @param  {string}
     * @return {Boolean}
     */
    isAge: function (age) {
      var re = /^[1-9]{1}[0-9]{1,2}$/;
      var intAge = age * 1;
      if (re.test(age) && intAge > 29 && intAge < 121) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 输入金额校验
     * @param  {[String]}
     * @return {Boolean}
     */
    isMoneyNum: function (value) {
      var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
      return reg.test(value);
    },
    /**
     * 输入交费期间
     * @param  {[String]}
     * @return {Boolean}
     */
    isYearNum: function (value) {
      var reg = /^([1-9][0-9]*)$/;
      return reg.test(value);
    },
    /**
     * 配偶性别校验
     * @param  {string}
     * @return {Boolean}
     */
    isMate: function (appSex, mateSex) {
      if (appSex === mateSex) {
        return false;
      } else {
        return true;
      }
    },
    /**
     * 父亲性别校验
     * @param  {string}
     * @return {Boolean}
     */
    isFather: function (fatherSex) {
      if (fatherSex !== 'M') {
        return false;
      } else {
        return true;
      }
    },
    /**
     * 母亲性别校验
     * @param  {string}
     * @return {Boolean}
     */
    isMother: function (motherSex) {
      if (motherSex !== 'F') {
        return false;
      } else {
        return true;
      }
    },
    /**
     * 保单号格式
     * @param  {string}
     * @return {Boolean}
     */
    isPolicyCode: function (value) {
     var pattern = /^\d{8}$/;
      return pattern.test(value);
    },
    /**
     * 备用信息 身份证验证
     * @param  {string}
     * @param  {string}
     * @return {Boolean}
     */
    isIdCard2: function (cardTypeText, cardIdText) {
      // 如果证件类型是护照 身份证号好为必填即;否则需要验证身份证格式
      if (cardTypeText === '护照') {
          return !!cardIdText;
      } else {
          return this.isIdCard(cardIdText);
      }
    },
    /**
     * 期交保费
     * @param  {string}
     * @return {Boolean}
     */
    isPremium: function (value) {
     var pattern = /^[0-9]{8}$/;
      return pattern.test(value);
    },
    /**
     * 交费期间
     * @param  {string}
     * @return {Boolean}
     */
    isPaymentYear: function (value) {
     var pattern = /^[0-9]{8}$/;
      return pattern.test(value);
    },
    /**
     * 邮箱验证
     * @param  {string}
     * @return {Boolean}
     */
    isEmail: function (value) {
      if (value === '无') {
        return true;
      };
      if (value !== '' && value !== '无') {
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return reg.test(value);
      };
    },
    /**
     * 电话号码校验
     * @param  {String}
     * @return {Boolean}
     */
    isPhoneNumJ: function (phoneNumber) {
      if (phoneNumber === '无') {
        return true;
      };
      if (phoneNumber !== '' && phoneNumber !== '无') {
        var reg = /^[0-9]{0,18}$/;
        return reg.test(phoneNumber);
      };
    },
    isBooblean: function (value) {
      return value;
    },
    // 身份证截取生日
    getBirthdayFromIdCard: function (idCard) {
      var birthday = '';
      if (idCard != null && idCard !== '') {
      if (idCard.length === 15) {
        birthday = '19' + idCard.substr(6, 6);
      } else if (idCard.length === 18) {
        birthday = idCard.substr(6, 8);
      }
        birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-');
      }
      return birthday;
    }
  };
