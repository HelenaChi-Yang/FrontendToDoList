<template>
  <div>
    <!-- 開始遊戲按鈕 -->
    <button v-if="!gameStarted" @click="startGame">開始遊戲</button>

    <!-- 牌組區塊 -->
    <div v-if="gameStarted" class="card-container">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="index"
        :class="{ flipped: card.flip}"
        @click="flipCard(index)"
      >
        <div class="card-inner">
          <div class="card-front">
            {{ card.name }}
          </div>
          <div class="card-back">
            🔮
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      cards: [
        { name: "The Fool", flip: false },
        { name: "The Magician", flip: false },
        { name: "The High Priestess", flip: false },
        { name: "The Empress", flip: false },
        { name: "The Emperor", flip: false },
        { name: "The Hierophant", flip: false },
        { name: "The Lovers", flip: false },
        { name: "The Chariot", flip: false },
        { name: "Strength", flip: false },
        { name: "The Hermit", flip: false },
        { name: "Wheel of Fortune", flip: false },
        { name: "Justice", flip: false },
        { name: "The Hanged Man", flip: false },
        { name: "Death", flip: false },
        { name: "Temperance", flip: false },
        { name: "The Devil", flip: false },
        { name: "The Tower", flip: false },
        { name: "The Star", flip: false },
        { name: "The Moon", flip: false },
        { name: "The Sun", flip: false },
        { name: "Judgement", flip: false },
        { name: "The World", flip: false }
      ]
    };
  },
  methods: {
    startGame() {
      this.gameStarted = true;
    },
    flipCard(index) {
      this.cards[index].flip = true;
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.card {
  width: 100px;
  height: 150px;
  border: 2px solid black;
  /* 3D 透視視角 */
  perspective: 1000px;
  /* 確保 .card-inner 使用 position: absolute; 時，它的定位參考點是 .card */
  position: relative;
}
.card-inner {
  width: 100%;
  height: 100%;
  /* 確保 .card-inner 使用 position: absolute; 時，它的定位參考點是 .card */
  position: absolute;
  /* 影響子元素保留 3D 效果 */
  transform-style: preserve-3d;
  /* 設定 0.6 秒的翻轉動畫 */
  transition: transform 0.6s;
}

/* 當 .card 同時擁有 flipped 類別時，讓 .card-inner 整個旋轉 180 度*/
.flipped.card .card-inner {
  will-change: transform;
  transform: rotateY(180deg);
}

/* 如果沒有給 .card-front 和 .card-back 設置 position: absolute;，它們會默認根據文檔流進行排列，它們不會重疊 */
.card-front, .card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  /* 讓 .card-front 和 .card-back 翻轉時不會同時顯示 */
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-sizing: border-box;
}

.card-front {
  background-color: gold;
  /* 翻轉 .card-front 讓它起始時朝向背面 */
  transform: rotateY(180deg);
}

.card-back {
  background-color: rgba(46, 0, 153, 0.499);
}
</style>
