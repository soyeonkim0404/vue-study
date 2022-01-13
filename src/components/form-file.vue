<template>
  <div class="file-wrap">
    <div class="attach">
      <div class="file-input">
        <span class="value" v-if="fileName !== ''">
          <span class="name">{{ fileName }}</span>
          <span class="type">{{ fileType }}</span>
        </span>
        <input type="file" ref="inputFile" @input="updateInput" />
        <span class="del" v-if="fileName !== ''">
          <button type="button" @click="deleteFile">
            <font-awesome-icon icon="times" />
          </button>
        </span>
      </div>
      <button type="button" class="btn-attach" @click="uploadFile">
        첨부파일
      </button>
    </div>
    <ul class="file-list" v-if="arrayFile.length">
      <li v-for="file in arrayFile" :key="file.id">
        <span>{{ file.name }}{{ file.type }}</span>
        <button type="button" @click="fileListDelete(file.id)">
          <font-awesome-icon icon="times" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'form-file',
  data() {
    return {
      fileId: '',
      fileName: '',
      fileType: '',
      arrayFile: [],
    };
  },
  methods: {
    uploadFile() {
      this.$refs.inputFile.click();
    },
    updateInput(e) {
      const fileNm = e.target.files[0].name;
      this.fileType = fileNm.substring(fileNm.lastIndexOf('.'), fileNm.length);
      this.fileName = fileNm.split(this.fileType)[0];
      const sameChk = this.arrayFile.some((v) => {
        return v.id === e.target.files[0].lastModified;
      });
      if (sameChk) {
        alert('이미 첨부 된 파일입니다.');
        return;
      }
      this.arrayFile = [
        ...this.arrayFile,
        {
          id: e.target.files[0].lastModified,
          name: this.fileName,
          type: this.fileType,
        },
      ];
      this.deleteFile();
    },
    deleteFile() {
      this.fileName = '';
      this.fileType = '';
    },
    fileListDelete(id) {
      this.arrayFile = this.arrayFile.filter((val) => val.id !== id);
    },
  },
};
</script>

<style scoped lang="scss">
.file-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  .attach {
    display: flex;
    width: 100%;
    .file-input {
      position: relative;
      justify-content: space-between;
      align-items: center;
      flex: 1 1 auto;
      height: 44px;
      border-radius: 10px;
      border: solid 1px #ddd;
      box-sizing: border-box;
      background-color: #f7f7f7;
      .value {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 0 50px 0 15px;
        height: 100%;
        display: flex;
        align-items: center;
        .name {
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
      .del {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        padding-right: 15px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #00d4ac;
        z-index: 1;
      }
    }
    .btn-attach {
      display: inline-block;
      padding: 0 15px;
      font-weight: 700;
      text-align: center;
      box-sizing: border-box;
      overflow: hidden;
      background: black;
      color: white;
      height: 44px;
      border-radius: 10px;
      margin-left: 10px;
    }
  }
  .file-list {
    width: 100%;
    margin-top: 20px;
    border: solid #ddd;
    border-width: 1px 0;
    padding: 20px 0;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-height: 30px;
      line-height: 1.3;
      background-color: #f7f7f7;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 20px;
      span {
        word-break: break-all;
      }
      & + li {
        margin-top: 15px;
      }
      button {
        padding: 0 10px;
      }
    }
  }
}
</style>
