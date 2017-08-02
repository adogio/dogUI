<template>
  <div id="app">
    <cov icon="paper-plane" info="Loading">
      <div slot="draw">
        <sta>在这个区域里可以使用任意的模块组件</sta>
        <but icon="bell" @click="notification" size="normal" color="blue">调用提醒</but>
        <sta>上面的按钮是从本体中复制过来的, 不会有作用域的问题, 点击一下试试看</sta>
        <but icon="bell" @click="notification" size="small" color="blue">调用提醒</but>
        <sta>抽屉菜单也可以用按钮打开关闭</sta>
        <but icon="bars" @click="draw(false)" size="normal" color="purple">开启/关闭 抽屉</but>
        <sma>你看, 调用提醒的时候, 也不会被遮挡<br>你还可以将credits放在这里</sma>
        <cre></cre>
      </div>
      <tit icon="comments" info="DOGUI DEMO">
        <sea placeholder="搜索框" @change="update"></sea>
        <sta icon="arrow-right">欢迎浏览 DogUI.
          <br> 这个 demo 是用 Vue.js 的组件构建而成, 包括这段话本身都使用了 dogUI 的组件.
          <br> 随意在这个表单上输入查看 DogUI 的效果吧.
        </sta>
        <sma>小字版本也可以</sma>
        <nab>导航栏</nab>
        <fol info="折叠框" icon="bars">
          <div slot="half">FULL</div>
          FULL<br>FULL<br>FULL
        </fol>
        <sta>抽屉菜单也可以用按钮打开关闭</sta>
        <but icon="bars" @click="draw(true)" size="normal" color="purple">开启/关闭 抽屉</but>
        <but icon="compass" @click="addNav" size="normal" color="red">添加导航</but>
        <but icon="bell" @click="notification" size="normal" color="blue">调用提醒</but>
        <but icon="qrcode" @click="Qrcode" size="normal" color="orange">生成二维码</but>
        <blo icon="pencil" info="输入框">
          <swi v-model="toxic" true="这个东西有毒" false="这个东西没有毒" null="请选择">有毒?</swi>
          <inp v-model="name">姓名</inp>
          <inp v-model="age" type="number">年龄</inp>
          <inp v-model="email" type="email">邮箱</inp>
          <inp v-model="tel" type="tel">电话</inp>
          <inp v-model="password" type="password">密码</inp>
          <inp v-model="money" type="money">智商的价格</inp>
          <inp v-model="aDPS" type="date" icon="calendar">有智商的日期</inp>
          <tex v-model="aDDD">测试</tex>
        </blo>
        <inf info="INPUT测试">
          这里显示上面输入的信息
          <br> 毒性: {{toxic}}
          <br> 姓名: {{name}}
          <br> 邮箱: {{email}}
          <br> 密码: {{password}}
          <br> 电话: {{tel}}
          <br> 年龄: {{age}}
          <br> 价格: {{money}}
          <br> 智商: {{aDPS}}
          <br> 大框: {{aDDD}}
        </inf>
        <blo icon="picture-o" info="图片预览">
          <vie :srcs="['http://img.wxcha.com/file/201703/15/af183778a2.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRZLWsxMIR6_21w9VocPqTRVrI4imZm5TQnnZyXTWXV27HehTxw','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4N_t4snDnVQYkH4-h1_zg5GTMlU9vUcC_ojIC8kPi_sx_MzS6DQ','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQyjPmsdY9ozZZBtTdSg_wDDlIMkaVBejDnXPBrhqZOkBA9fPNw','http://img.wxcha.com/file/201703/15/af183778a2.jpg','http://img.wxcha.com/file/201703/15/af183778a2.jpg','http://img.wxcha.com/file/201703/15/af183778a2.jpg','http://img.wxcha.com/file/201703/15/af183778a2.jpg']">长按图片下载</vie>
        </blo>
        <blo icon="camera" info="图片上传">
          <upl icon="bandcamp" quality="40" @change="testf(0, $event)" color="red">没有预览</upl>
          <upl icon="car" quality="40" @change="testf(0, $event)" color="blue" preview="right">有预览</upl>
        </blo>
        <blo icon="podcast" info="表格框">
          <cel info="Cell">测试Cell</cel>
          <cel info="搜索框:">{{seach}}</cel>
        </blo>
        <blo icon="rss" info="选择框">
          <sel :list="test" v-model="idselect">同步选择1</sel>
          <sel :list="test" v-model="idselect">同步选择2</sel>
          <sel :list="test" v-model="idselecttest">预选择1</sel>
        </blo>
        <inf info="SELECT测试">
          这里显示上面选择的内容的ID
          <br> 你选择了:{{idselect}}
          <br> 预选择了:{{idselecttest}}
        </inf>
        <but icon="plus" @click="tocheck" size="large" color="red">DOUBLE CHECK</but>
        <cre>干架</cre>
      </tit>
    </cov>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        name: "一个姓名",
        toxic: null,
        age: "",
        aDPS: "",
        seach: "",
        email: "",
        money: "",
        drawS: 0,
        tel: "",
        password: "",
        idselect: "",
        idselecttest: 2,
        aDDD: "123",
        test: [{
            name: "我的ID是1",
            id: 1
          },
          {
            name: "我的ID是2",
            id: 2
          }
        ]
      }
    },
    mounted: function () {
      dog.alert("external-link-square", "从屏幕最右侧开始滑动试试看!!!");
      setTimeout(() => {
        dog.unload();
      }, 1);
    },
    methods: {
      draw: function (isIn) {
        if (isIn) {
          if (this.drawS === 2) {
            dog.alert("hand-peace-o",
              "你可能注意到在抽屉菜单打开时, 点击主体中的按钮抽屉菜单会鬼畜的晃悠一下, \
              这是因为同时触发了按钮和点击外侧关闭抽屉菜单, \
              想避免这种情况可以在外侧按钮的方法中调用dog.draw(true)而不是dog.draw()来避免!",
              20000
            )
            this.drawS++;
          } else {
            this.drawS++;
          }
        }
        dog.draw();

      },
      Qrcode: function () {
        dog.qrcode("123", "123", {
          mode: "text",
          topper: '星星',
          center: '<i class="fa fa-star fa-fw"></i>'
        })
      },
      notification: function () {
        dog.alert("flask", "这是一条测试提示, 现在测试提示的大小十分灵活, 这是一句很长的话");
        setTimeout(function () {
          dog.alert("anchor", "这是一句很短的话");
        }, 50);
      },
      update: function (info) {
        this.seach = info;
      },
      addNav: function () {
        dog.nav("测试", () => {
          console.log('test');
        })
        dog.nav("测试1", () => {
          console.log('test');
        })
        dog.nav("测试2", () => {
          console.log('test');
        })
        dog.nav("测试3", () => {
          console.log('test');
        })
      },
      tocheck: function () {
        dog.check({
          icon: "buttonIcon", //optional
          message: "message",
          next: "buttonText",
          back: "backButtonText",
          color: "buttonColor",
          bcolor: "backButtonColor", //optional
          top: "topIcon", //optional
          then: function () {
            dog.upload("car", "123");
          },
        })
      },
      testf: function (index, src) {
        this.filesss = src;
      }
    }
  }
</script>