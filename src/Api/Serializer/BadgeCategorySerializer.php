<?php

namespace V17Development\FlarumBadges\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;

class BadgeCategorySerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'badgeCategory';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($badgeCategory)
    {
        return [
            'name'          => $badgeCategory->name,
            'isEnabled'     => $badgeCategory->is_enabled,
            'createdAt'     => $this->formatDate($badgeCategory->created_at),
        ];
    }

    protected function badges($badge) {
        return $this->hasMany($badge, BadgeSerializer::class);
    }
}
