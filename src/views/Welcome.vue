<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <h1 class="text-center mb-5 display-1">Welcome</h1>
        <p class="text-center">
          This site is
          <a href="https://inspiring-haibt-86ddb3.netlify.app">live</a> thanks
          to Netlify.
        </p>
        <p class="text-center">
          <a href="https://github.com/mmatthews1981/vue-list"
            >https://github.com/mmatthews1981/vue-list</a
          >
        </p>
        <p class="text-center mb-5">
          Icons made by
          <a
            href="https://www.flaticon.com/authors/flat-icons"
            title="Flat Icons"
            >Flat Icons</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
        </p>
        <div class="easter-egg">
          <img
              alt="Easter Egg"
              src="../assets/easter.png"
              @click="eggstate = !eggstate"
              tabindex="0"
          />
        </div>
        <div aria-atomic="true" aria-live="polite">
          <div v-if="eggstate">
            <p id="egganchor" class="lead" aria-live="assertive">
              Congratulations, you found the easter egg!
            </p>
            <p>
              Faced with a great expanse of whitespace, I've decided to document
              my thoughts on this code test, more or less as I complete it, and
              explain the approach I took and how it relates to how I normally
              work.
            </p>
            <p>
              Completing this challenge was interesting. It's a relatively
              simple task that asks for basically one of every basic Vue
              feature, so I learned or refreshed quite a lot in the process. It
              was made very clear to me, in both the instructions and when I
              asked for clarification, that this code test is as much a
              technical checkup as a serious examination of what a developer
              would do with vague requirements, and I think it actually achieved
              that splendidly. This is easily one of the best code tests I've
              ever been given.
            </p>
            <p>
              When faced with vague requirements, the first thing I do is find
              the stakeholder and ask for clarification. Sometimes they can't or
              won't do that, as has happened with this project, so in that case
              I know that whatever I'm working on is going to need iteration.
              Even when a stakeholder can't tell me what they do want, in
              virtually every case they can tell me what they don't want once
              they can see some work up on the screen. Therefore, my preferred
              solution in this case is to work as quickly as possible and
              implement the simplest possible solutions to the requirements. The
              faster I can come back with a working demo to the stakeholder, the
              faster I can get my vague requirements clarified.
            </p>
            <p>
              Ideally, this project would follow be followed up with a sitdown
              with the stakeholder, where I would ask the following questions:
            </p>
            <ul>
              <li>
                Why is this data so inconsistent? Can it be cleaned up before
                it's delivered to the interface? In the demo, I've made
                everything a string, and as you can see, it makes for some odd
                results, and some results that are invisible to the search
                feature, since there's literally no information to search for
                some entries.
              </li>
              <li>
                How do you define initials? I've made it that we get a
                two-character-max set of initials for the avatars, but some of
                the data doesn't have a name, so in those cases I've added a
                question mark for the sake of visual consistency, and to
                highlight entries that might need work.
              </li>
              <li>
                Right now I've just added Bootstrap to give it a little
                structure and make it easier to look at, don't get too hung up
                on the look of the thing for now. When is the designer going to
                deliver the mockups for this project?
              </li>
              <li>Do you want default values for missing names or subtitles?</li>
              <li>Should the search be case-sensitive or case-insensitive?</li>
              <li>
                This data gets delivered to me unordered, so it could, by
                default show up in any order at runtime. Is this intentional?
              </li>
            </ul>
            <p>
              I went with vanilla Bootstrap for this project, and for that
              reason didn't include SASS. We just need a little color and
              layout, and once the utility classes are deployed, very little
              additional CSS is needed, and as valid CSS is also valid SASS,
              we're good for the moment and this code will be just fine when and
              if we add SASS to the project later. Scoped styles in the
              single-paged templates also help keep the styles quick and dirty.
              As no comprehensive design requirements were included, it's better
              to keep things easy to refactor as I am anticipating a full
              redesign soon.
            </p>
            <p>
              Accessibility for a feature like this, a dynamically filtering
              list, is a challenge. The best solution I've been able to come up
              with for this so far is to make sure that changes to the list
              composition are announced in the reader without forcing the reader
              to read the list of results, allowing the user to navigate the
              list as they please. It seems to follow best practices from blogs,
              which are often heavy with filtered lists, and I discovered that
              if I ask a screen reader to read all the changes in a filtered
              list, it tries to read all of the elements at the same time
              without interrupting itself, resulting in a profoundly
              psychedellic experience. I'm happy with the results right now, but
              in the real world I would find an expert and ask them if they had
              any advice, because I haven't been able to find accessibility
              advice for this sort of UI pattern online.
            </p>
            <p>
              I originally attached the easter egg to the App component and
              passed it's value as a prop to the Welcome and the Header
              components, so that it's state persisted across both views, but I
              took that out and attached it directly to the Welcome component
              instead, to simplify everything. That behavior is in the repo if I
              need it and can be re-added easily if that comes up.
            </p>
            <p>
              And finally, right when I thought I was done, my spouse pointed
              out that I'd forgotten to add the pagination, because of course I
              had. I pulled in a plugin to handle that functionality, and ended
              up having to tinker with it a bit to make it visible and legible
              to screen readers. I think once I have the accessibility tinkering
              done, I'm going to use this component for everything, I quite like
              it, it's flexible and effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      eggstate: this.easteregg,
    };
  },
};
</script>

<style scoped>
.easter-egg {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2rem;
}
img {
  height: 48px;
  cursor: pointer;
}
</style>