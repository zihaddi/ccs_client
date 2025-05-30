<script setup>
const props = defineProps({ isOpenConModal: Boolean });
const emit = defineEmits(['confirm', 'update:isOpenConModal']);

const visible = ref(props.isOpenConModal);
const isLoading = ref(false);

watch(() => props.isOpenConModal, (newVal) => {
    visible.value = newVal;
});

const confirmDelete = async () => {
    isLoading.value = true;
    try {
        await emit('confirm');
    } finally {
        isLoading.value = false;
        emit('update:isOpenConModal', false);
    }
};
</script>

<template>
    <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }" :closable="false">
        <div class="flex justify-center">
            <!-- <NuxtImg
                src="/assets/images/warning.gif"
                class="h-[100px]"
                format="gif"
                :modifiers="{ quality: 20 }"
            /> -->
            <div class="f-modal-alert">
                <div class="f-modal-icon f-modal-warning scaleWarning">
                    <span class="f-modal-body pulseWarningIns"></span>
                    <span class="f-modal-dot pulseWarningIns"></span>
                </div>

                <!-- <div class="f-modal-icon f-modal-error animate">
                    <span class="f-modal-x-mark">
                        <span class="f-modal-line f-modal-left animateXLeft"></span>
                        <span class="f-modal-line f-modal-right animateXRight"></span>
                    </span>
                    <div class="f-modal-placeholder"></div>
                    <div class="f-modal-fix"></div>
                </div> -->

                <!-- <div class="f-modal-icon f-modal-success animate">
                    <span class="f-modal-line f-modal-tip animateSuccessTip"></span>
                    <span class="f-modal-line f-modal-long animateSuccessLong"></span>
                    <div class="f-modal-placeholder"></div>
                    <div class="f-modal-fix"></div>
                </div> -->
            </div>
        </div>
        <div class="mb-6 mt-2 text-center">
            <h3 class="font-semibold text-lg text-center mt-2">Are you sure you want to proceed?</h3>
        </div>
        <div class="flex justify-end items-center gap-3 border-gray-200">
            <Button v-if="isLoading" severity="secondary" style="cursor: not-allowed; width: 80px;">
                <ProgressSpinner style="width: 25px; height: 25px" strokeWidth="8" animationDuration=".5s" />
            </Button>
            <template v-else>
                <Button type="button" label="Cancel" severity="danger" outlined
                    class="transition-all duration-300 hover:scale-105" @click="emit('update:isOpenConModal', false)">
                    <template #icon="{ class: iconClass }">
                        <i class="pi pi-times-circle mr-2" :class="iconClass"></i>
                    </template>
                </Button>
                <Button type="button" label="Yes" severity="success" raised 
                    class="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    @click="confirmDelete">
                    <template #icon="{ class: iconClass }">
                        <i class="pi pi-check-circle mr-2" :class="iconClass"></i>
                    </template>
                </Button>
            </template>
        </div>
    </Dialog>
</template>
<style scoped lang="scss">
.f-modal-alert .f-modal-icon {
    border-radius: 50%;
    border: 4px solid gray;
    box-sizing: content-box;
    height: 80px;
    margin: 20px auto;
    padding: 0;
    position: relative;
    width: 80px;

    // Success icon
    &.f-modal-success,
    &.f-modal-error {
        border-color: #A5DC86;

        &:after,
        &:before {
            background: #fff;
            content: '';
            height: 120px;
            position: absolute;
            transform: rotate(45deg);
            width: 60px;
        }

        &:before {
            border-radius: 120px 0 0 120px;
            left: -33px;
            top: -7px;
            transform-origin: 60px 60px;
            transform: rotate(-45deg);
        }

        &:after {
            border-radius: 0 120px 120px 0;
            left: 30px;
            top: -11px;
            transform-origin: 0 60px;
            transform: rotate(-45deg);
        }

        .f-modal-placeholder {
            border-radius: 50%;
            border: 4px solid rgba(165, 220, 134, .2);
            box-sizing: content-box;
            height: 80px;
            left: -4px;
            position: absolute;
            top: -4px;
            width: 80px;
            z-index: 2;
        }

        .f-modal-fix {
            background-color: #fff;
            height: 90px;
            left: 28px;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 5px;
            z-index: 1;
        }

        .f-modal-line {
            background-color: #A5DC86;
            border-radius: 2px;
            display: block;
            height: 5px;
            position: absolute;
            z-index: 2;

            &.f-modal-tip {
                left: 14px;
                top: 46px;
                transform: rotate(45deg);
                width: 25px;
            }

            &.f-modal-long {
                right: 8px;
                top: 38px;
                transform: rotate(-45deg);
                width: 47px;
            }
        }
    }

    // Error icon
    &.f-modal-error {
        border-color: #F27474;

        .f-modal-x-mark {
            display: block;
            position: relative;
            z-index: 2;
        }

        .f-modal-placeholder {
            border: 4px solid rgba(200, 0, 0, .2);
        }

        .f-modal-line {
            background-color: #F27474;
            top: 37px;
            width: 47px;

            &.f-modal-left {
                left: 17px;
                transform: rotate(45deg);
            }

            &.f-modal-right {
                right: 16px;
                transform: rotate(-45deg);
            }
        }
    }

    // Warning icon

    &.f-modal-warning {
        border-color: #F8BB86;

        &:before {
            animation: pulseWarning 2s linear infinite;
            background-color: #fff;
            border-radius: 50%;
            content: "";
            display: inline-block;
            height: 100%;
            opacity: 0;
            position: absolute;
            width: 100%;
        }

        &:after {
            background-color: #fff;
            border-radius: 50%;
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: 1;
        }
    }

    &.f-modal-warning .f-modal-body {
        background-color: #F8BB86;
        border-radius: 2px;
        height: 47px;
        left: 50%;
        margin-left: -2px;
        position: absolute;
        top: 10px;
        width: 5px;
        z-index: 2;
    }

    &.f-modal-warning .f-modal-dot {
        background-color: #F8BB86;
        border-radius: 50%;
        bottom: 10px;
        height: 7px;
        left: 50%;
        margin-left: -3px;
        position: absolute;
        width: 7px;
        z-index: 2;
    }

    +.f-modal-icon {
        margin-top: 50px;
    }
}

.animateSuccessTip {
    animation: animateSuccessTip .75s;
}

.animateSuccessLong {
    animation: animateSuccessLong .75s;
}

.f-modal-icon.f-modal-success.animate:after {
    animation: rotatePlaceholder 4.25s ease-in;
}

.f-modal-icon.f-modal-error.animate:after {
    animation: rotatePlaceholder 4.25s ease-in;
}

.animateErrorIcon {
    animation: animateErrorIcon .5s;
}

.animateXLeft {
    animation: animateXLeft .75s;
}

.animateXRight {
    animation: animateXRight .75s;
}

.scaleWarning {
    animation: scaleWarning 0.75s infinite alternate;
}

.pulseWarningIns {
    animation: pulseWarningIns 0.75s infinite alternate;
}

@keyframes animateSuccessTip {

    0%,
    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }

    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }

    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }

    100% {
        width: 25px;
        left: 14px;
        top: 45px;
    }
}

@keyframes animateSuccessLong {

    0%,
    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }

    84% {
        width: 55px;
        right: 0;
        top: 35px;
    }

    100% {
        width: 47px;
        right: 8px;
        top: 38px;
    }
}

@keyframes rotatePlaceholder {

    0%,
    5% {
        transform: rotate(-45deg);
    }

    100%,
    12% {
        transform: rotate(-405deg);
    }
}

@keyframes animateErrorIcon {
    0% {
        transform: rotateX(100deg);
        opacity: 0;
    }

    100% {
        transform: rotateX(0deg);
        opacity: 1;
    }
}

@keyframes animateXLeft {

    0%,
    65% {
        left: 82px;
        top: 95px;
        width: 0;
    }

    84% {
        left: 14px;
        top: 33px;
        width: 47px;
    }

    100% {
        left: 17px;
        top: 37px;
        width: 47px;
    }
}

@keyframes animateXRight {

    0%,
    65% {
        right: 82px;
        top: 95px;
        width: 0;
    }

    84% {
        right: 14px;
        top: 33px;
        width: 47px;
    }

    100% {
        right: 16px;
        top: 37px;
        width: 47px;
    }
}

@keyframes scaleWarning {
    0% {
        transform: scale(1);
    }

    30% {
        transform: scale(1.02);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes pulseWarning {
    0% {
        background-color: #fff;
        transform: scale(1);
        opacity: 0.5;
    }

    30% {
        background-color: #fff;
        transform: scale(1);
        opacity: 0.5;
    }

    100% {
        background-color: #F8BB86;
        transform: scale(2);
        opacity: 0;
    }
}

@keyframes pulseWarningIns {
    0% {
        background-color: #F8D486;
    }

    100% {
        background-color: #F8BB86;
    }
}
</style>
