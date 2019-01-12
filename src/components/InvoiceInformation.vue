<template>
  <div class="invoice-information">
    <header>
      <small class="client-type-label collapsed">{{invoiceInfo.type}}</small>
      <div class="client-info-container">
        <h1>{{invoiceInfo.name || 'Guest'}}</h1>
        <div class="indicator collapsed" v-on:click="toggleVerboseView">
          <i></i>
          <div style="clear: both;"></div>
        </div>
      </div>
      <div v-if="invoiceInfo.isMapped">
        <small>
          <i class="far fa-check-circle"></i>
          This vendor is mapped
        </small>
      </div>
    </header>
    <div style="clear: both"></div>
    <div class="quick-view">
      <span>{{invoiceInfo.invoiceNumber}}</span>
      <span>{{invoiceInfo.invoiceDate}}</span>
      <span>{{invoiceInfo.restaurantName}}</span>
      <span class="long see-more">Lorem ipsum...</span>
      <dl>
        <div class="total">
          <dt>Total</dt>
          <dd>${{invoiceInfo.total.toLocaleString('en')}}</dd>
        </div>
      </dl>
    </div>
    <dl class="long-view">
      <div>
        <dt>Invoice No.</dt>
        <dd>{{invoiceInfo.invoiceNumber}}</dd>
      </div>

      <div>
        <dt>Invoice Type</dt>
        <dd>{{invoiceInfo.invoiceType}}</dd>
      </div>

      <div>
        <dt>Restaurant</dt>
        <dd>{{invoiceInfo.restaurantName}}</dd>
      </div>

      <div class="subtotal">
        <div class="sub-group">
          <dt>subtotal</dt>
          <dd>${{invoiceInfo.subtotal.toLocaleString('en')}}</dd>
        </div>
        <div class="sub-group">
          <dt>tax</dt>
          <dd>${{invoiceInfo.tax.toLocaleString('en')}}</dd>
        </div>
      </div>

      <div>
        <dt>Posting Date</dt>
        <dd>{{invoiceInfo.postingDate}}</dd>
      </div>

      <div>
        <dt>Invoice Date</dt>
        <dd>{{invoiceInfo.invoiceDate}}</dd>
      </div>

      <div>
        <dt>Due Date</dt>
        <dd>{{invoiceInfo.dueDate}}</dd>
      </div>

      <div class="total">
        <dt>Total</dt>
        <dd>${{invoiceInfo.total.toLocaleString('en')}}</dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'InvoiceInformation',
  methods: {
    toggleVerboseView: function (e) {
      const toggleElements = document.querySelectorAll('.quick-view, .long-view, .invoice-information .indicator, .invoice-information small')
      toggleElements.forEach(function toggleExpanded (elm) {
        elm.classList.toggle('expanded')
      })
    }
  },
  props: {
    invoiceInfo: Object
  }
}
</script>

<style lang="scss">
 @import '../assets/css/InvoiceInformation';
</style>
