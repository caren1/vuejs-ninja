<template>
  <div class="chat-window">
      <div class="error" v-if="error">{{ error }}</div>
      <div class="messages" v-if="formattedDocuments" ref="messages">
          <div class="single" v-for="document in formattedDocuments" :key="document.id">
              <span class="created-at">{{ document.createdAt }}</span>
              <span class="name">{{ document.name }}</span>
              <span class="message">{{ document.message }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { onUpdated } from '@vue/runtime-core';
export default {
    setup() {
        const { documents, error } = getCollection('messages');
        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map((doc) => {
                   let time = formatDistanceToNow(doc.createdAt.toDate())
                   return { ...doc, createdAt: time }
                })
            }
        })

        //auto scroll to bottom of messages
        const messages = ref(null);
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight;
        }) 

        return { error, formattedDocuments, messages }
    }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>