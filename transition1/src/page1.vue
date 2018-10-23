<template>
    <div class="project-desc">
       <span v-html="code" v-for="code in msg"></span>   
       <span v-show="show"></span>
    </div>
</template>
<script>
export default {
  props: ["state"],
  data() {
    return {
      msg: "AVueProject"
        .split("")
        .concat(["<br>", "{", "<br>"], 'return "LMJ"'.split(""), ["<br>", "}"]),
      msgIndex: 0,
      codes: [],
      show: true,
      timer1: null,
      timer2: null
    };
  },
  methods: {
    addCodes() {
      this.codes.push(this.msg[this.msgIndex]);
      this.msgIndex++;
    },
    showChange() {
      this.show = !this.show;
      if ((this.msgIndex = this.msg.length)) {
        this.clear();
      }
    },
    clear() {
      clearInterval(this.timer1);
      this.timer1 = null;
      clearInterval(this.timer2);
      this.timer2 = null;
    }
  },
  watch: {
    state() {
      if (this.state == "enter") {
        this.timer2 = setInterval(this.addCodes, 700);
        this.timer1 = setInterval(this.showChange, 70);
      }
      if (this.state == "leave") {
        this.clear();
        this.codes = [];
        this.msgIndex = 0;
      }
    }
  }
};
</script>
<style>
.project-desc {
  position: absolute;
  bottom: 30px;
  left: 30px;
  font-size: 30px;
  font-weight: bold;
}
</style>


