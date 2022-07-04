<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <van-form @submit="onSubmit">
      <van-field
        name="测试插槽"
        label="插槽测试"
      >
        <template #input>
          <baseInput
            v-model="testInput"
            placeholder="Enter your username"
            :rules="[{ required: true, message: '该值不能为空' }]"/>
        </template>
      </van-field>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import baseInput from './testComponents'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      testInput: '测试插槽内容',
      username: '',
      password: ''
    }
  },
  components: {
    baseInput
  },
  methods: {
    onSubmit(values) {
      this.$toast(`submit values: ${JSON.stringify(values)}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
