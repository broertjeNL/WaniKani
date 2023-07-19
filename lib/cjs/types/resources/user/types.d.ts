import { lessonOrderings, reviewOrderings, subscriptionTypes } from '../../constants';
import { ApiResponse } from '../../services';
export type UserResponse = ApiResponse<UserData, 'user'>;
/**
 * User Data Structure
 * */
export interface UserData {
    /**
     * If the user is on vacation, this will be the timestamp of when that vacation started. If the user is not on vacation, this is null.
     */
    current_vacation_started_at?: Date;
    /**
     * The current level of the user. This ignores subscription status.
     */
    level: number;
    /**
     * User settings specific to the WaniKani application. See table below for the object structure.
     */
    preferences: UserPreferences;
    /**
     * The URL to the user's public facing profile page.
     */
    profile_url: string;
    /**
     * The signup date for the user.
     */
    started_at: Date;
    /**
     * Details about the user's subscription state. See table below for the object structure.
     */
    subscription: Subscription;
    /**
     * The user's username.
     */
    username: string;
}
/**
 * Preferences Object Attributes
 * */
export interface UserPreferences {
    /**
     * The voice actor to be used for lessons and reviews. The value is associated to subject.pronunciation_audios.metadata.voice_actor_id.
     */
    default_voice_actor_id: number;
    /**
     * Automatically play pronunciation audio for vocabulary during extra study.
     */
    extra_study_autoplay_audio: boolean;
    /**
     * Automatically play pronunciation audio for vocabulary during lessons.
     */
    lessons_autoplay_audio: boolean;
    /**
     * Number of subjects introduced to the user during lessons before quizzing.
     */
    lessons_batch_size: number;
    /**
     * The order in which lessons are presented. The options are ascending_level_then_subject, shuffled, and ascending_level_then_shuffled. The default (and best experience) is ascending_level_then_subject.
     */
    lessons_presentation_order: LessonOrder;
    /**
     * Automatically play pronunciation audio for vocabulary during reviews.
     */
    reviews_autoplay_audio: boolean;
    /**
     * Toggle for display SRS change indicator after a subject has been completely answered during review.
     */
    reviews_display_srs_indicator: boolean;
    /**
     * The order in which reviews are presented. The options are shuffled and lower_levels_first. The default (and best experience) is shuffled.
     */
    reviews_presentation_order: ReviewOrder;
}
/**
 * Subscription Object Attributes
 */
export interface Subscription {
    /**
     * Whether the user currently has a paid subscription.
     */
    active: boolean;
    /**
     * The maximum level of content accessible to the user for lessons, reviews, and content review. For unsubscribed/free users, the maximum level is 3. For subscribed users, this is 60. Any application that uses data from the WaniKani API must respect these access limits.
     */
    max_level_granted: number;
    /**
     * The date when the user's subscription period ends. If the user has subscription type lifetime or free then the value is null.
     */
    period_ends_at: Date;
    /**
     * The type of subscription the user has. Options are following: free, recurring, and lifetime.
     */
    type: SubscriptionType;
}
export type SubscriptionType = (typeof subscriptionTypes)[number];
export type ReviewOrder = (typeof reviewOrderings)[number];
export type LessonOrder = (typeof lessonOrderings)[number];
//# sourceMappingURL=types.d.ts.map