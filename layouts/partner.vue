<template>
    <div class="relative">
        <Nuxt/>
        <FooterDefault
        :connection="connection"
        :menu="menu"
        :support="support"
        :payment="payment"
        :subtitle="subtitle"/>
        <transition name="fade">
            <Alert v-if="alert.isActive"/>
        </transition>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Alert from '@/components/Alert.vue'
export default {
    components: {
        Alert
    },
    computed: {
        ...mapState({
            alert: state => state.alert.alert
        })
    },
    data() {
        return {
            connection: {
                title: 'Связаться с нами',
                phone: {
                title: 'Телефон',
                text: '+992 933 93 93 93',
                href: 'tel: 992 933 93 93 93'
                },
                email: {
                title: 'E-mail',
                text: 'info@goldentravel.tj',
                href: 'mailto: info@goldentravel.tj',
                },
            },
            menu: {
                title: 'Меню',
                aboutUs: 'О нас',
                news: 'Новости',
                vacancy: 'Вакансии',
                termUse: 'Условия пользования',
            },
            support: {
                title: 'Поддержка',
                FAQ: 'ЧАВО',
                videoMaterials: 'Видеоматериалы',
                becomePartner: 'Стать партнером',
                advertisement: 'Реклама',
            },
            payment: 'Способы оплаты',
            subtitle: 'Golden Travel 2023',
        }
    },
    mounted() {
        console.log(this.alert);
    }
}
</script>