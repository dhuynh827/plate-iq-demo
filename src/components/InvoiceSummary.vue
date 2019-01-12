<template>
<div>
  <div class="summary">
    <div class="actions">
      <span id="direct-mail">
        <i class="fa fa-envelope">&nbsp;</i>
        Direct
      </span>
      <div class="buttons">
        <button id="more" v-on:click.self="showMoreMenu">More&emsp;<span class="caret">&#9660;</span></button>
        <button id="approve">Approve</button>
      </div>
      <div id="actionsMenu">
        <ul>
          <li>Export</li>
          <li>Mark as exported</li>
          <li class="break"><hr></li>
          <li>Set up vendor</li>
          <li class="break"><hr></li>
          <li>Flag invoice <i class="fab fa-font-awesome-flag"></i></li>
          <li>Archive invoice <i class="fas fa-archive"></i></li>
          <li class="delete">Delete invoice <i class="far fa-trash-alt"></i></li>
        </ul>
      </div>
      <div style="clear: both"></div>
    </div>
    <InvoiceInformation :invoiceInfo="invoiceData.invoiceSummary"/>
    <div id="nav">
      <router-link to="/">Line Items</router-link>&emsp;
      <router-link to="/history">History</router-link>
    </div>
  </div>
  <router-view/>
</div>
</template>

<script>
import InvoiceInformation from './InvoiceInformation'

export default {
  name: 'InvoiceSummary',
  components: {
    InvoiceInformation
  },
  props: {
    invoiceData: Object
  },
  methods: {
    showMoreMenu: function () {
      const actionsMenu = document.querySelector('#actionsMenu')
      actionsMenu.classList.toggle('expand')
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/InvoiceSummary';
</style>
